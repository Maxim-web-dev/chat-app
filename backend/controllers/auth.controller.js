import axios from 'axios';
import User from '../models/user.model.js';
import { getUsersForSidebar } from './user.controller.js';

export const getGithubToken = async (req, res, next) => {
  const client_id = process.env.GITHUB_CLIENT_ID;
  const client_secret = process.env.GITHUB_CLIENT_SECRET;
  const { code } = req.body;
  if (!code) return res.status(400).json({ error: 'Code is not provided' });
  try {
    axios
      .post('https://github.com/login/oauth/access_token', null, {
        params: { client_id, client_secret, code },
        headers: { Accept: 'application/json' }
      })
      .then((response) => {
        const token = response.data.access_token;
        req.token = token;
        next();
      });
  } catch (error) {
    console.log('error in the getToken controller: ', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getUserData = async (req, res, next) => {
  try {
    const token = req.token;
    const Authorization = 'Bearer ' + token;

    const { data } = await axios.get('https://api.github.com/user', {
      headers: { Authorization }
    });

    req.github_id = data.id;
    req.userDataFromGithub = data;
    next();
  } catch (error) {
    console.log('error in the getUserData (backend): ', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const checkUserInDB = async (req, res) => {
  try {
    const token = req.token;
    const userDataFromGithub = req.userDataFromGithub;
    const github_id = req.github_id;
    const user = await User.findOne({ github_id });

    if (!user) {
      const newUser = new User({
        avatarUrl: userDataFromGithub.avatar_url,
        github_id: userDataFromGithub.id,
        name: userDataFromGithub.name,
        username: userDataFromGithub.login,
        token
      });
      if (newUser) {
        await newUser.save();
        return res.json({ userDataFromGithub, token })
      } else {
        return res.status(400).json({ error: 'Invalid user data' });
      }
    }
    // if user is found
    const { chats, users } = getUsersForSidebar(user);
    await User.updateOne({ github_id }, { $set: { token } });
    return res.json({ chats, users, userDataFromGithub, token })
  } catch (error) {
    console.log('error in the checkUserInDB: ', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const checkAuth = async (req, res, next) => {
  try {
    const token = req?.get('Authorization')
    if (token) {
      const user = await User.findOne({ token })
      if (user) next()
    } else {
      return console.log('no token');
    }
  } catch (error) {
    console.log('error in the checkAuth: ', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
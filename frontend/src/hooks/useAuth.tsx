import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export const useAuth = () => {
  const [rerender, setRerender] = useState(false);
  const navigate = useNavigate();

  const getGithubToken = async (code: string) => {
    try {
      axios
        .post('http://localhost:1000/api/auth', { code })
        .then((res) => {
          localStorage.setItem('auth', 'true');
          console.log('Данные пользователя: ', res.data);
          Cookies.set('github_token', res.data.token, { expires: 15, sameSite: 'strict' });
          setRerender(!rerender);
          navigate('/home');
        })
        .catch((err) => console.log('Error in the useAuth hook: ', err));
    } catch (error) {
      console.log('Error in the useAuth hook: ', error);
    }
  };
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) getGithubToken(code);
  }, []);
};

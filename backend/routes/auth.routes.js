import express from 'express';

import {
  checkUserInDB,
  getGithubToken,
  getUserData
} from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/', getGithubToken, getUserData, checkUserInDB);

export default router;

import express from 'express';

import { getUsersForSidebar } from '../controllers/user.controller.js';
import { checkAuth } from '../controllers/auth.controller.js'

const router = express.Router();

router.get('/', checkAuth);

export default router;

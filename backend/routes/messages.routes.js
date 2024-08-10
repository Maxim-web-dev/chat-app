import express from 'express';

const router = express.Router();

router.post('/send/:id');
router.get('/:id');

export default router;

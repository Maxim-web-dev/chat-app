import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectToDB from './db/connectToDb.js';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import messagesRoutes from './routes/messages.routes.js';

dotenv.config();

const app = express();

app.use(cors({
	origin: 'http://localhost:5173',
	credentials: true
}));
app.use(express.json());

const PORT = process.env.PORT || 1111;

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/messages', messagesRoutes);

process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on('SIGTERM', () => {
  console.log('👋 SIGTERM RECEIVED. Shutting down gracefully');
  server.close(() => {
    console.log('💥 Process terminated!');
  });
});

app.listen(PORT, () => {
  connectToDB();
  console.log(`server running at port ${PORT}`);
});

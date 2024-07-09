import express from 'express'
import dotenv from 'dotenv'
import ejs from 'ejs'
import session from 'express-session'

import connectToDB from './db/connectToDb.js'
import authRoutes from './routes/auth.routes.js'
import accountRouter from './routes/auth.routes.js'

dotenv.config()

const app = express()

const PORT = process.env.PORT || 1111

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: false
	})
)
app.get('/', (req, res) => {
	res.redirect('/auth')
})

app.use('/auth', authRoutes)
app.use('/account', accountRouter)

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/messages', messagesRoutes)

process.on('uncaughtException', err => {
	console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
	console.log(err.name, err.message);
	process.exit(1);
});

process.on('unhandledRejection', err => {
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

app.listen(PORT, (req, res) => {
	connectToDB()
	console.log(`server running at port ${PORT}`);
})
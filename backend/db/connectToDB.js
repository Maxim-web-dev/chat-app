import mongoose from 'mongoose'

const connectToDB = async () => {
	try {
		mongoose.connect(process.env.DB_URI)
		console.log('Connected to DB');
	} catch (error) {
		console.log('Connecting to DB is failed', error.message);
	}
}

export default connectToDB
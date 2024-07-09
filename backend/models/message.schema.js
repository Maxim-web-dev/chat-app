import mongoose from 'mongoose'
const { Schema } = mongoose

const MessageSchema = new Schema({
	senderId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	receiverId: {   
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	message: {
		type: String,
		required: true
	}
})

const Message = mongoose.model('Message', MessageSchema)

export default Message
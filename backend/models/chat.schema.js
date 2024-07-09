import mongoose from 'mongoose'
const { Schema } = mongoose

const ChatSchema = new Schema({
	participants: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		}
	],
	messages: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Message',
			default: []
		}
	]
})

const Chat = mongoose.model('Chat', ChatSchema)

export default Chat
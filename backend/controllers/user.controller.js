import Chat from '../models/chat.schema'

export const getUsersForSidebar = async (req, res) => {
	try {
	 const currentUser = req.user
	 
	 const chats = await Chat.find({ participants: currentUser.id }).populate('participants')
	 const users = chats.map(chat => chat.participants.filter(participant => participant._id != currentUser.id)[0])
 
	 res.json({ chats, users })
	} catch (error) {
	 console.error('Error in the "getUsersForSidebar":', error)
	 res.status(500).json({ error: 'Internal Server Error' })
	}
 }
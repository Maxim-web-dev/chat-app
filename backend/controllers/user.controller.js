import Chat from '../models/chat.model.js';

export const getUsersForSidebar = async (user) => {
  try {
    const chats = await Chat.find({ participants: user.id }).populate(
      'participants'
    );
    const users = chats.map(
      (chat) =>
        chat.participants.filter(
          (participant) => participant._id != currentUser.id
        )[0]
    );
    console.log(chats, users);
    return { chats, users };
  } catch (error) {
    console.error('Error in the "getUsersForSidebar":', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

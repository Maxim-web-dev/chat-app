import { FC } from 'react';

interface PROPS {
  name: string;
  avatarUrl: string;
  // lastMessage: string
}
const Chat: FC<PROPS> = ({ name, avatarUrl }) => {
  return (
    <div className="rounded-md w-full flex p-2">
      <img src={avatarUrl || ''} alt="avatar" className="rounded-full" />
      <p>{name}</p>
    </div>
  );
};

export default Chat;

import Chats from './chats';
import SearchOfUsers from './searchOfUsers';
import UserSettings from './userSettings';

const Sidebar = () => {
  return (
    <div className="h-full w-[25vw] flex flex-col gap-4 p-4 back bg-[#282828]">
      <UserSettings />
      <SearchOfUsers />
      <Chats />
    </div>
  );
};

export default Sidebar;

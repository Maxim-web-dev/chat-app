import Chat from './chat'
import UserSkeleton from './userSkeleton'

const Chats = () => {
	const { users, isLoading } = useGetUsersForSidebar()

	return (
		<div>
			{isLoading
				? Array(5)
						.fill(0)
						.map((_, index) => <UserSkeleton key={index} />)
				: users.map(user => (
						<Chat key={user._id} name={user.name} avatarUrl={user.avatar} />
				  ))}
		</div>
	)
}

export default Chats

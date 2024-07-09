const UserSettings = () => {
	return (
		<div className='h-[8vh] w-full flex flex-col gap-4 p-4 back bg-[#282828]'>
			<img src="" alt="avatar" />
			<p>{currentUser.name}</p>
			<p>How do you feel today?</p>
			{/* <Settings /> */}
		</div>
	)
}

export default UserSettings
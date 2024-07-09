import User from '../models/user.model'

export const login = async (req, res) => {
	try {
		const { username, password } = req.body;
		const user = await User.findOne({ username })

		if (!user) {
			return res.status(400).json({ error: "Invalid username or password" })
		}

	
	} catch (error) {
		console.log('Error in the auth controller', error.message);
		res.status(500).json({error: "Internal server error"})
	}
}
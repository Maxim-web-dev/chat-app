import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useGetUsersForSidebar = () => {
	const getUsersForSidebar = async () => {
		const { data } = await axios.get('/api/users')
		return data
	}
	
	const { data, error, isLoading } = useQuery({queryKey: ['users'], queryFn: getUsersForSidebar})

	return { data, isLoading, error }
}
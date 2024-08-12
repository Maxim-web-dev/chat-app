import { useEffect } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie';

export const Home = () => {
	const token = Cookies.get('github_token');
	
	useEffect(() => {
		axios.get('http://localhost:1000/api/users', {headers: {Authorization: token}})
	}, [])
  return <div></div>;
};

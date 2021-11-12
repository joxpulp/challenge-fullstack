import axios from 'axios';

export const apiCommerce = axios.create({
	baseURL: 'https://hekitech.herokuapp.com',
	withCredentials: true,
});

import { request } from "./requester.js";

const baseUrl = 'http://localhost:3030';

export const login = (email, password) => {
	request('POST', `${baseUrl}/users/login`);
}
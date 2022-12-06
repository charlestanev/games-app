import * as request from "./requester.js";

const baseUrl = 'http://localhost:3030/users';

export const login = (email, password) =>
	request.post(`${baseUrl}/login`, { email, password });

export const logout = async (accessToken) => {
	try {
		const response = await fetch(`${baseUrl}/logout`, {
			headers: {
				'X-Authorization': accessToken
			}
		});

		return response;
	} catch (error) {
		alert(error);
	}

}

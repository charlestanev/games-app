import { request } from './requester.js'

const baseUrl = 'http://localhost:3030';

export const getAll = () => {
	return request('GET', `${baseUrl}/data/games`)

}
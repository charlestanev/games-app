import { get } from './requester.js'

const baseUrl = 'http://localhost:3030';

export const getAll = () => {
	return get(`${baseUrl}/data/games`)
}
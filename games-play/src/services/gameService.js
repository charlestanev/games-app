import * as request from './requester.js'

const baseUrl = 'http://localhost:3030/data/games';

export const getAll = () => request.get(baseUrl);

export const create = (gameData) => request.post(baseUrl, gameData);
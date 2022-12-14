import { lazy, Suspense, useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import uniqid from 'uniqid';

import * as gameService from './services/gameService.js';
import { AuthContext } from './context/AuthContext.js';


import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';
import Login from './components/Login/Login.js';
import CreateGame from './components/CreateGame/CreateGame.js';
import Catalog from './components/Catalog/Catalog.js';
import GameDetails from './components/GameDetails/GameDetails.js';
import './App.css';
import Logout from './Logout/Logout.js';
import { useLocalStorage } from './hooks/useLocalStorage.js';


const Register = lazy(() => import('./components/Register/Register.js'));


function App() {

	const [games, setGames] = useState([]);
	const [auth, setAuth] = useLocalStorage('auth', {});
	const navigate = useNavigate();

	const userLogin = (authData) => {
		setAuth(authData);
	}

	const userLogout = () => {
		setAuth({});
	}

	const addComment = (gameId, comment) => {
		setGames(state => {
			const game = state.find(x => x._id === gameId);

			const comments = game.comments || [];
			comments.push(comment);

			return [
				...state.filter(x => x._id !== gameId),
				{ ...game, comments }
			]
		})
	}

	const addGameHandler = (gameData) => {
		setGames(state => [
			...state,
			{
				...gameData,
				_id: uniqid()
			}
		])

		navigate('/catalog');
	}

	useEffect(() => {
		gameService.getAll()
			.then(result => {
				setGames(result);
				console.log(result);
			})
	}, [])

	return (
		<AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
			<div id="box">
				<Header />
				{/* Main Content */}
				<main id="main-content">
					{/*Home Page*/}
					<Routes>
						<Route path='/' element={<Home games={games} />} />
						<Route path='/login' element={<Login />} />
						<Route path='/register' element={
							<Suspense fallback={<span>Loading...</span>}>
								<Register />
							</Suspense>
						} />
						<Route path='/logout' element={<Logout />} />
						<Route path='/create' element={<CreateGame addGameHandler={addGameHandler} />} />
						<Route path='/catalog' element={<Catalog games={games} />} />
						<Route path='/catalog/:gameId' element={<GameDetails games={games} addComment={addComment} />} />
					</Routes>

				</main>
			</div>
		</AuthContext.Provider>

	);
}

export default App;

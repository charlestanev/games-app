import './App.css';
import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';
import CreateGame from './components/CreateGame/CreateGame.js';
import Catalog from './components/Catalog/Catalog.js';
import { useEffect, useState } from 'react';
import * as gameService from './services/gameService.js';
import GameDetails from './components/GameDetails/GameDetails.js';

function App() {

	const [games, setGames] = useState([]);

	useEffect(() => {
		gameService.getAll()
			.then(result => {
				setGames(result);
				console.log(result);
			})
	}, [])

	return (
		<div id="box">
			<Header />
			{/* Main Content */}
			<main id="main-content">
				{/*Home Page*/}
				<Routes>
					<Route path='/' element={<Home games={games} />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/create' element={<CreateGame />} />
					<Route path='/catalog' element={<Catalog games={games} />} />
					<Route path='/catalog/:gameId' element={<GameDetails games={games} />} />
				</Routes>

			</main>



		</div>

	);
}

export default App;

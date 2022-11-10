import './App.css';
import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';
import CreateGame from './components/CreateGame/CreateGame.js';
import Catalog from './components/Catalog/Catalog.js';


function App() {
	return (
		<div id="box">
			<Header />
			{/* Main Content */}
			<main id="main-content">
				{/*Home Page*/}
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/create' element={<CreateGame />} />
					<Route path='/games' element={<Catalog />} />
				</Routes>

			</main>



		</div>

	);
}

export default App;

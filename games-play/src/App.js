import './App.css';
import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';
import { Routes, Route } from 'react-router-dom'

function App() {
	return (
		<div id="box">
			<Header />
			{/* Main Content */}
			<main id="main-content">
				{/*Home Page*/}
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>

			</main>



		</div>

	);
}

export default App;

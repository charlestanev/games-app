import './App.css';
import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';

function App() {
	return (
		<div id="box">
			<Header />
			{/* Main Content */}
			<main id="main-content">
				{/*Home Page*/}
				<Home />
			</main>



		</div>

	);
}

export default App;

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.js";

const Header = () => {
	const { user } = useContext(AuthContext);

	return (
		<header>
			{/* Navigation */}
			<h1>
				<Link className="home" to="/">
					GamesPlay
				</Link>
			</h1>
			<nav>
				<Link to="/catalog">All games</Link>
				{/* Logged-in users */}
				{user.email
					?
					<div id="user">
						<Link to="/create">Create Game</Link>
						<Link to="#">{user.email}</Link>
						<Link to="/logout">Logout</Link>
					</div>
					:
					<div id="guest">
						<Link to="/login">Login</Link>
						<Link to="/register">Register</Link>
					</div>
				}


				{/* Guest users */}

			</nav>
		</header>
	);
}

export default Header;
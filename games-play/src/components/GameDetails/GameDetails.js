import { useState } from "react";
import { useParams } from "react-router-dom";

const GameDetails = ({
	games,
	addComment
}) => {
	const { gameId } = useParams();
	const [comment, setComment] = useState({
		username: '',
		text: '',
	})

	const [error, setError] = useState({
		username: '',
		comment: '',
	})

	const game = games.find(x => x._id == gameId);

	const addCommentHandler = (e) => {
		e.preventDefault();

		const result = `${comment.username}: ${comment.comment}`;

		addComment(gameId, result)
		console.log(comment);
	}

	const onChange = (e) => {
		setComment(state => ({
			...state,
			[e.target.name]: e.target.value
		}))
	}

	const valdateUsername = (e) => {
		const username = e.target.value;
		let errorMessage = '';

		if (username.length < 4) {
			errorMessage = 'Username must be longer then 4 characters';
		} else if (username.length > 10) {
			errorMessage = 'Username must be shorter then 10 characters';
		}

		setError(state => ({
			...state,
			username: errorMessage,
		}));
	}

	return (
		<section id="game-details">
			<h1>Game Details</h1>
			<div className="info-section">
				<div className="game-header">
					<img className="game-img" src={games.imageUrl} />
					<h1>{games.title}</h1>
					<span className="levels">MaxLevel: {games.maxLevel}</span>
					<p className="type">{games.category}</p>
				</div>
				<p className="text">{games.summary}</p>
				{/* Bonus ( for Guests and Users ) */}
				<div className="details-comments">

					{
						!game.comments
							? <p className="no-comment">No comments.</p>
							: <h2>Comments:</h2>
					}

					<ul>
						{game.comments?.map((x) => (
							<li className="comment">
								<p>{x}</p>
							</li>
						))}
					</ul>
					{/* Display paragraph: If there are no games in the database */}
				</div>
				{/* Edit/Delete buttons ( Only for creator of this game ) */}
				<div className="buttons">
					<a href="#" className="button">
						Edit
					</a>
					<a href="#" className="button">
						Delete
					</a>
				</div>
			</div>
			{/* Bonus */}
			{/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
			<article className="create-comment">
				<label>Add new comment:</label>
				<form className="form" onSubmit={addCommentHandler}>
					<input
						type="text"
						name="username"
						placeholder="name"
						onChange={onChange}
						onBlur={valdateUsername}
						value={comment.username}
					/>

					{error.username &&
						<span style={{ color: 'red' }}>{error.username}</span>
					}

					<textarea
						name="comment"
						placeholder="Comment......"
						onChange={onChange}
						value={comment.comment}
					/>

					<input
						className="btn submit"
						type="submit"
						value="Add Comment"
					/>
				</form>
			</article>
		</section>
	);
}

export default GameDetails;
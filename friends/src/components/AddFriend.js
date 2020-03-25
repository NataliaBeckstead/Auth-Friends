import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddFriend = () => {
	const [inputValues, setInputValues] = useState({
		name: "",
		age: "",
		email: ""
	});
	const [addedFriend, setAddedFriend] = useState(false);
	const [error, setError] = useState("");

	const handleChange = e => {
		setInputValues({
			...inputValues,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		axiosWithAuth()
			.post("/api/friends", inputValues)
			.then(() => setAddedFriend(true))
			.catch(err =>
				setError(`Error: ${err.response.status} ${err.response.statusText}`)
			);
		setInputValues({
			name: "",
			age: "",
			email: ""
		});
	};

	return (
		<div className="add-friend">
			<h1>Add Friend</h1>
			{addedFriend && <div className="add-success">Friend Added!</div>}
			{error && <div className="error">{error}</div>}
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="name"
					value={inputValues.name}
					onChange={handleChange}
					placeholder="Name"
				/>
				<input
					type="text"
					name="age"
					value={inputValues.age}
					onChange={handleChange}
					placeholder="Age"
				/>
				<input
					type="email"
					name="email"
					value={inputValues.email}
					onChange={handleChange}
					placeholder="Email"
				/>
				<button type="submit">Add Friend</button>
			</form>
		</div>
	);
};

export default AddFriend;
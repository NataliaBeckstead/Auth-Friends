import React, { useState } from "react";

const EditFriend = ({ friend, handleSubmit, setIsEditing }) => {
	const [inputValues, setInputValues] = useState({
		name: friend.name || "",
		age: friend.age || "",
		email: friend.email || ""
	});

	const handleChange = e => {
		setInputValues({
			...inputValues,
			[e.target.name]: e.target.value
		});
	};

	return (
		<div className="edit-friend">
			<form
				onSubmit={e => {
					e.preventDefault();
					handleSubmit(friend.id, inputValues);
					setIsEditing(false);
				}}
			>
				<input
					type="text"
					name="name"
					value={inputValues.name}
					onChange={handleChange}
					placeholder="Name"
				/>
				<br></br>
				<input
					type="text"
					name="age"
					value={inputValues.age}
					onChange={handleChange}
					placeholder="Age"
				/>
				<br></br>
				<input
					type="email"
					name="email"
					value={inputValues.email}
					onChange={handleChange}
					placeholder="Email"
				/>
				<br></br>
				<button type="submit">Save Changes</button>
			</form>
		</div>
	);
};

export default EditFriend;
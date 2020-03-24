import React from "react";

const FriendCard = ({ friend }) => {
	return (
		<div className="friend-card">
			<h2>{friend.name}</h2>
			<p>Age: {friend.age}</p>
			<p>Email: {friend.email}</p>
		</div>
	);
};

export default FriendCard;
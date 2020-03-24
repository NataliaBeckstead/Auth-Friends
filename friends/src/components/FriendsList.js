import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import FriendCard from "./FriendCard";

const FriendsList = () => {
	const [friends, setFriends] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		setIsLoading(true);
		setError("");
		axiosWithAuth()
			.get("/api/friends")
			.then(res => {
				setIsLoading(false);
				setFriends(res.data);
			})
			.catch(err => {
				setIsLoading(false);
				setError(`Error: ${err.response.status} ${err.response.statusText}`);
			});
	}, []);

	return (
		<div className="friends-list">
			{isLoading && (
				<div className="loading">
					<h2>Loading...</h2>
				</div>
			)}
			{!isLoading && error && <div className="error">{error}</div>}
			{!isLoading &&
				!error &&
				friends.map(friend => <FriendCard key={friend.id} friend={friend} />)}
		</div>
	);
};

export default FriendsList;
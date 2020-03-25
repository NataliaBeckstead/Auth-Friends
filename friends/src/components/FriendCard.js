import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";

import EditFriend from "./EditFriend";

const FriendCard = ({ friend, handleDelete, handleEdit }) => {
	const [isEditing, setIsEditing] = useState(false);

	return (
		<div className="friend">
			{!isEditing && (
				<div className="friend-card">
					<FontAwesomeIcon icon={faPen} onClick={() => setIsEditing(true)} />
					<FontAwesomeIcon
						icon={faTrash}
						onClick={() => handleDelete(friend.id)}
					/>
					<h2>{friend.name}</h2>
					<p>Age: {friend.age}</p>
					<p>Email: {friend.email}</p>
				</div>
			)}
			{isEditing && (
				<EditFriend
					friend={friend}
					handleSubmit={handleEdit}
					setIsEditing={setIsEditing}
				/>
			)}
		</div>
	);
};

export default FriendCard;
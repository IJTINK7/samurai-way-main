import React from "react";

export const Navigation = () => {
	return (
		<nav>
			<div className="profile"><a href="#">Profile</a></div>
			<div className="messages"><a href="#">Messages</a></div>
			<div className="mainContent"><a href="#">Main content</a></div>
		</nav>
	);
}
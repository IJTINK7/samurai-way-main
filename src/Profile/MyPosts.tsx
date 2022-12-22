import React from "react";
import s from "./Posts.module.css";

export const MyPosts = () => {
	return (
		<div>My posts
			<div>
				<textarea></textarea>
				<button>Add post</button>
			</div>
			<div className={s.posts}>
				<div>Post 1</div>
				<div>Post 2</div>
			</div>

		</div>
	);
}
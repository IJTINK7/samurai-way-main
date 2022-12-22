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
				<div className={s.item}>
					<img src="https://i.pinimg.com/474x/14/72/1f/14721f857f1b9c6253274f5ae7656780.jpg" alt="Pain"/>
					<div>Post 1</div>
				</div>
				<div>Post 2</div>
			</div>

		</div>
	);
}
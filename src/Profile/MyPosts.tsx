import React from "react";
import s from "./Posts.module.css";
import {Post} from "./Post/Post";

export const MyPosts = () => {
	return (
		<div>My posts
			<div>
				<textarea></textarea>
				<button>Add post</button>
			</div>
			<div className={s.posts}>
				<Post src={"https://i.pinimg.com/474x/14/72/1f/14721f857f1b9c6253274f5ae7656780.jpg"}
					  alt={"Pain"}
					  postName={"Pain"}/>
				<Post src={"https://avatars.mds.yandex.net/i?id=03c84c63db065f1fb6c8c86332bc35bd-5477525-images-thumbs&n=13"}
					  alt={"Konan"}
					  postName={"Konan"}/>
			</div>

		</div>
	);
}
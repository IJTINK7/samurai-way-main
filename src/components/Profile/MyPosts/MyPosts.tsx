import React, {ChangeEvent, useState} from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";

export const MyPosts = () => {
	const [postsValue, setPostsValue] = useState("")
	const [postTextValue, setPostTextValue] = useState("I am Obito Uchiha and I will surpass you once I awaken my Sharingan!")
	const setPostsValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setPostsValue(e.currentTarget.value)
	}
	const sendPost = () => {
		setPostTextValue(postsValue)
		setPostsValue("")
	}
	return (
		<div className={s.my_posts_wrapper}>
				<div>My posts</div>
				<div>
					<input type="text" value={postsValue} className={s.my_posts_wrapper_input} onChange={setPostsValueHandler}/>
					<button className={s.my_posts_wrapper_button} onClick={sendPost}>Add Post</button>
				</div>

				<div>
					<Post postText={postTextValue}/>
				</div>
		</div>
	);
};

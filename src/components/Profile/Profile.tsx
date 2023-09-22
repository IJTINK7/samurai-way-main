import React, {ChangeEvent, useState} from 'react';
import s from "./Profile.module.css"
import img from "./../../images/obita-uchiha-sage-of-six-paths.jpg"
import {Post} from "./MyPosts/Post/Post";

export const Profile = () => {
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
		<div className={s.profile_wrapper}>
			<div>
				Obito Uchiha
			</div>
			<div>
				<img src={img} alt="obita-uchiha-sage-of-six-paths" width="500px"/>
			</div>
			<div>
				<div>My posts</div>
				<input type="text" value={postsValue} className={s.profile_wrapper_input} onChange={setPostsValueHandler}/>
				<button className={s.profile_wrapper_button} onClick={sendPost}>Add Post</button>
				<div>
					<Post postText={postTextValue}/>
				</div>
			</div>
		</div>
	);
};

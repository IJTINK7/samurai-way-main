import React, {ChangeEvent, useState} from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostsInfoType} from "../../../App";

type MyPostsPropsType={
	postsInfo: PostsInfoType
}

export const MyPosts: React.FC<MyPostsPropsType> = ({postsInfo}) => {
	const [postsValue, setPostsValue] = useState("")
	// const [postTextValue, setPostTextValue] = useState("Add this string to new post")
	const setPostsValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setPostsValue(e.currentTarget.value)
	}
	const sendPost = () => {
		// setPostTextValue(postsValue)
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
					{postsInfo.map(el=><Post postText={el.postText} likesCount={el.likesCount}/>)}
				</div>
		</div>
	);
};

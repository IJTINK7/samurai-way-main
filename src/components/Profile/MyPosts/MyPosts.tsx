import React, {ChangeEvent, useState} from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostsInfoType} from "../../../state/state";
import {v1} from "uuid";


type MyPostsPropsType={
	postsInfo: PostsInfoType
}

export const MyPosts: React.FC<MyPostsPropsType> = ({postsInfo}) => {

	const [postsValue, setPostsValue] = useState("")
	// const [postTextValue, setPostTextValue] = useState("Add this string to new post")

	let newPostElement = React.createRef<HTMLInputElement>();

	const setPostsValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setPostsValue(e.currentTarget.value)
	}
	const sendPost = () => {
		// let newPost = {id: v1(), postText: "NEW POST TEXT", likesCount: 0}
		// setPostsValueHandler(newPost)
		// setPostsValue(newPostElement.current.value)
	}

	return (
		<div className={s.my_posts_wrapper}>
				<div>My posts</div>
				<div>
					<input ref={newPostElement} type="text" value={postsValue} className={s.my_posts_wrapper_input} onChange={setPostsValueHandler}/>
					<button className={s.my_posts_wrapper_button} onClick={sendPost}>Add Post</button>
				</div>

				<div>
					{postsInfo.map(el=><Post postText={el.postText} likesCount={el.likesCount}/>)}
				</div>
		</div>
	);
};

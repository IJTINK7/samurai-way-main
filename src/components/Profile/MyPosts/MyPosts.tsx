import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {ActionType, PostsInfoType} from "../../../state/state";

type MyPostsPropsType = {
	posts: PostsInfoType[]
	newPostText: string
	dispatch: (action: ActionType) => void
}

let addPostAC = () => {
	return {type: "ADD-POST"}
}
let onPostChangeHandlerAC = () => {
	return {type: "UPDATE-NEW-POST-TEXT", payload: {newText}}
}

export const MyPosts: React.FC<MyPostsPropsType> = ({posts, newPostText, dispatch}) => {

	const onPostChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		let newText = e.currentTarget.value
		let action = onPostChangeHandlerAC(newText)
		dispatch(action)
	}
	const addPostHandler = () => {
		let action = addPostAC()
		dispatch(action)
	}

	return (
		<div className={s.my_posts_wrapper}>
			<div>My posts</div>
			<div>
				<input value={newPostText} className={s.my_posts_wrapper_input} onChange={onPostChangeHandler}/>
				<button className={s.my_posts_wrapper_button} onClick={addPostHandler}>Add Post</button>
			</div>

			<div>
				{posts.map(el => <Post postText={el.postText} likesCount={el.likesCount}/>)}
			</div>
		</div>
	);
};

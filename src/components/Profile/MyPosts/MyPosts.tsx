import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {ActionType, PostsInfoType} from "../../../state/state";

type MyPostsPropsType = {
	posts: PostsInfoType
	dispatch: (action: ActionType) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = ({posts,dispatch}) => {

	const onPostChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		let newText = e.currentTarget.value
		dispatch({type: "UPDATE-NEW-POST-TEXT", payload: {newText}})
	}
	const addPostHandler = () => {
		let newText = ""
		dispatch({type: "ADD-POST", payload:{newText}})
		dispatch({type: "UPDATE-NEW-POST-TEXT", payload: {newText}})
	}

	return (
		<div className={s.my_posts_wrapper}>
			<div>My posts</div>
			<div>
				<input value={"newPostText"} className={s.my_posts_wrapper_input} onChange={onPostChangeHandler}/>
				<button className={s.my_posts_wrapper_button} onClick={addPostHandler}>Add Post</button>
			</div>

			<div>
				{posts.map(el => <Post postText={el.postText} likesCount={el.likesCount}/>)}
			</div>
		</div>
	);
};

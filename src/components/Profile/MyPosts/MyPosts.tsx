import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {ActionType, PostsInfoType} from "../../../redux/state";
import {
	addPostAC,
	onPostChangeHandlerAC,
} from "../../../redux/profileReducer";

type MyPostsPropsType = {
	posts: PostsInfoType[]
	newPostText: string
	dispatch: (action: ActionType) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = ({posts, newPostText, dispatch}) => {

	const onPostChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(onPostChangeHandlerAC(e.currentTarget.value))
	}
	const addPostHandler = () => {
		dispatch(addPostAC())
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

import React from 'react';
import {ActionType, PostsInfoType} from "../../../redux/store";
import {
	addPostAC,
	onPostChangeHandlerAC,
} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";

type MyPostsPropsType = {
	posts: PostsInfoType[]
	newPostText: string
	dispatch: (action: ActionType) => void
}

export const MyPostsContainer: React.FC<MyPostsPropsType> = ({posts, newPostText, dispatch}) => {
	const addPost = () => {
		dispatch(addPostAC())
	}

	const onPostChange = (text: string) => {
		dispatch(onPostChangeHandlerAC(text))
	}

	return (
		<MyPosts posts={posts} newPostText={newPostText} updateNewPostText={onPostChange} addPost={addPost}/>
	);
};

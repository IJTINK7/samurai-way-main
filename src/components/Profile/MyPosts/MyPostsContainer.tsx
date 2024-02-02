import React from 'react';
import {PostsInfoType} from "../../../redux/store";
import {
	addPostAC,
	onPostChangeHandlerAC,
} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {useDispatch} from "react-redux";

type MyPostsPropsType = {
	posts: PostsInfoType[]
	newPostText: string
}

export const MyPostsContainer: React.FC<MyPostsPropsType> = ({posts, newPostText}) => {
	let dispatch = useDispatch()
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

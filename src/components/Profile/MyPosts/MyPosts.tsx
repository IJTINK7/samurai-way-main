import React, {ChangeEvent, useRef, useState} from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostsInfoType} from "../../../state/state";

type MyPostsPropsType={
	posts: PostsInfoType
	newPostText: string
	addPost:(postMessage: string)=> void
	updateNewPostText: (newText: string)=> void
}

export const MyPosts: React.FC<MyPostsPropsType> = ({posts, newPostText, addPost, updateNewPostText}) => {
	const [onChangePostsValue, setOnChangePostsValue] = useState("")
	let inputRef = useRef<HTMLInputElement | null>(null); // for functional components

	const setOnChangePostsValueHandler = (e: ChangeEvent<HTMLInputElement> ) => {
		setOnChangePostsValue(e.currentTarget.value)
	}
	const addPostHandler = () => {
		if (inputRef.current !== null) {
			addPost(inputRef.current?.value)
		}
	}

	return (
		<div className={s.my_posts_wrapper}>
				<div>My posts</div>
				<div>
					<input ref={inputRef} type="text" value={onChangePostsValue} className={s.my_posts_wrapper_input} onChange={setOnChangePostsValueHandler}/>
					<button className={s.my_posts_wrapper_button} onClick={addPostHandler}>Add Post</button>
				</div>

				<div>
					{posts.map(el=><Post postText={el.postText} likesCount={el.likesCount}/>)}
				</div>
		</div>
	);
};

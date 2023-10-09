import React, {useRef} from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostsInfoType} from "../../../state/state";

type MyPostsPropsType={
	posts: PostsInfoType
	addPost:()=> void
	newPostText: string
	updateNewPostText: (newText: string)=> void
}

export const MyPosts: React.FC<MyPostsPropsType> = ({posts, newPostText, addPost, updateNewPostText}) => {

	let inputRef = useRef<HTMLInputElement | null>(null); // for functional components

	const onPostChange = () => {
		if(inputRef.current){
			updateNewPostText(inputRef.current.value)
		}
	}
	const addPostHandler = () => {
		addPost()
		updateNewPostText("")
	}

	return (
		<div className={s.my_posts_wrapper}>
				<div>My posts</div>
				<div>
					<input ref={inputRef} value={newPostText} className={s.my_posts_wrapper_input} onChange={onPostChange}/>
					<button className={s.my_posts_wrapper_button} onClick={addPostHandler}>Add Post</button>
				</div>

				<div>
					{posts.map(el=><Post postText={el.postText} likesCount={el.likesCount}/>)}
				</div>
		</div>
	);
};

import React, {ChangeEvent, useState} from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostsInfoType} from "../../../state/state";
// import {v1} from "uuid";


type MyPostsPropsType={
	postsInfo: PostsInfoType
	addPost:(postMessage: string)=> void
}

export const MyPosts: React.FC<MyPostsPropsType> = ({postsInfo,addPost}) => {

	const [postsValue, setPostsValue] = useState("")
	// const [postTextValue, setPostTextValue] = useState("Add this string to new post")

	// let newPostElement = React.createRef<HTMLInputElement>(); // for class components


	// let newPostElement = useRef(null); // for functional components
	// const addPost = (postMessage: string) => {
	// 	if (newPostElement.current !== null) {
	// 		console.log((typeof newPostElement.current))
	// 	}
	// 	console.log(postMessage)
	// 	// let newPost = {id: v1(), postText: "NEW POST TEXT", likesCount: 0}
	// 	// setPostsValueHandler(newPost)
	// 	// setPostsValue(newPostElement.current.value)
	// }


	const setPostsValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setPostsValue(e.currentTarget.value)
	}

	return (
		<div className={s.my_posts_wrapper}>
				<div>My posts</div>
				<div>
					<input type="text" value={postsValue} className={s.my_posts_wrapper_input} onChange={setPostsValueHandler}/>
					<button className={s.my_posts_wrapper_button} onClick={()=>addPost("New Post Message")}>Add Post</button>
				</div>

				<div>
					{postsInfo.map(el=><Post postText={el.postText} likesCount={el.likesCount}/>)}
				</div>
		</div>
	);
};

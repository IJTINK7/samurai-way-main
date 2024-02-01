import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostsInfoType} from "../../../redux/store";


type MyPostsPropsType = {
	posts: PostsInfoType[]
	newPostText: string
	updateNewPostText: (text: string) => void
	addPost: () => void
}

export const MyPosts: React.FC<MyPostsPropsType> = ({posts, newPostText, updateNewPostText, addPost}) => {

	const addPostHandler = () => {
		addPost()
	}
	const onPostChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		updateNewPostText(e.currentTarget.value)
	}

	return (
		<div className={s.my_posts_wrapper}>
			<div>My posts</div>
			<div>
				<input value={newPostText} className={s.my_posts_wrapper_input} onChange={onPostChangeHandler}/>
				<button className={s.my_posts_wrapper_button} onClick={addPostHandler}>Add Post</button>
			</div>

			<div>
				{posts.map(el => <Post key={el.id} postText={el.postText} likesCount={el.likesCount}/>)}
			</div>
		</div>
	);
};

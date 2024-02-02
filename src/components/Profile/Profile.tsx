import React from 'react';
import s from "./Profile.module.css"
import {ProfileHeaderInfo} from "./ProfileHeaderInfo/ProfileHeaderInfo";
import {ProfilePageType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {useSelector} from "react-redux";
import {RootReducerType} from "../../redux/redux-store";



export const Profile = () => {
	let state = useSelector<RootReducerType, ProfilePageType>(store => store.profile)
	return (
		<div className={s.profile_wrapper}>
			<div>
				<ProfileHeaderInfo/>
			</div>
			<div>
				<MyPostsContainer posts={state.posts} newPostText={state.newPostText}/>
			</div>
		</div>
	);
};

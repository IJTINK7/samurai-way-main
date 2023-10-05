import React from 'react';
import s from "./Profile.module.css"
import {ProfileHeaderInfo} from "./ProfileHeaderInfo/ProfileHeaderInfo";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfilePageType} from "../../state/state";


type ProfilePropsType={
	profilePage: ProfilePageType
	addPost:(postMessage: string)=> void
	updateNewPostText: (newText: string)=> void
}

export const Profile: React.FC<ProfilePropsType> = ({profilePage, addPost, updateNewPostText}) => {
	return (
		<div className={s.profile_wrapper}>
			<div>
				<ProfileHeaderInfo/>
			</div>
			<div>
				<MyPosts posts={profilePage.posts} newPostText={profilePage.newPostText} addPost={addPost} updateNewPostText={updateNewPostText}/>
			</div>
		</div>
	);
};

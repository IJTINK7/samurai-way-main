import React from 'react';
import s from "./Profile.module.css"
import {ProfileHeaderInfo} from "./ProfileHeaderInfo/ProfileHeaderInfo";
import {MyPosts} from "./MyPosts/MyPosts";
import {ActionType, ProfilePageType} from "../../redux/store";

type ProfilePropsType = {
	profilePage: ProfilePageType
	dispatch: (action: ActionType) => void
}

export const Profile: React.FC<ProfilePropsType> = ({profilePage, dispatch}) => {
	return (
		<div className={s.profile_wrapper}>
			<div>
				<ProfileHeaderInfo/>
			</div>
			<div>
				<MyPosts posts={profilePage.posts} newPostText={profilePage.newPostText} dispatch={dispatch}/>
			</div>
		</div>
	);
};

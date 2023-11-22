import React from 'react';
import s from "./Profile.module.css"
import {ProfileHeaderInfo} from "./ProfileHeaderInfo/ProfileHeaderInfo";
import {MyPosts} from "./MyPosts/MyPosts";
import {ActionType, ProfilePageType} from "../../state/state";


type ProfilePropsType = {
	profilePage: ProfilePageType
	dispatch:(action: ActionType)=> void
}

export const Profile: React.FC<ProfilePropsType> = ({profilePage, dispatch}) => {
	return (
		<div className={s.profile_wrapper}>
			<div>
				<ProfileHeaderInfo/>
			</div>
			<div>
				<MyPosts posts={profilePage.posts} dispatch={dispatch}/>
			</div>
		</div>
	);
};

import React from 'react';
import s from "./Profile.module.css"
import {ProfileHeaderInfo} from "./ProfileHeaderInfo/ProfileHeaderInfo";
import {MyPosts} from "./MyPosts/MyPosts";
import {PostsInfoType} from "../../state/state";

type ProfilePropsType={
	postsInfo: PostsInfoType
}

export const Profile: React.FC<ProfilePropsType> = ({postsInfo}) => {
	return (
		<div className={s.profile_wrapper}>
			<div>
				<ProfileHeaderInfo/>
			</div>
			<div>
				<MyPosts postsInfo={postsInfo}/>
			</div>
		</div>
	);
};

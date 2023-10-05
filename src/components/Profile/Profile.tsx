import React from 'react';
import s from "./Profile.module.css"
import {ProfileHeaderInfo} from "./ProfileHeaderInfo/ProfileHeaderInfo";
import {MyPosts} from "./MyPosts/MyPosts";
import {PostsInfoType} from "../../state/state";

type ProfilePropsType={
	postsInfo: PostsInfoType
	addPost:(postMessage: string)=> void
}

export const Profile: React.FC<ProfilePropsType> = ({postsInfo, addPost}) => {
	return (
		<div className={s.profile_wrapper}>
			<div>
				<ProfileHeaderInfo/>
			</div>
			<div>
				<MyPosts postsInfo={postsInfo} addPost={addPost}/>
			</div>
		</div>
	);
};

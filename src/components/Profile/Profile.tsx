import React from 'react';
import s from "./Profile.module.css"
import img from "./../../images/obita-uchiha-sage-of-six-paths.jpg"
import {MyPosts} from "./MyPosts/MyPosts";
import {PostsInfoType} from "../../App";

type ProfilePropsType={
	postsInfo: PostsInfoType
}

export const Profile: React.FC<ProfilePropsType> = ({postsInfo}) => {
	return (
		<div className={s.profile_wrapper}>
			<div>
				Obito Uchiha
			</div>
			<div>
				<img src={img} alt="obita-uchiha-sage-of-six-paths" width="500px"/>
			</div>
			<div>
				<MyPosts postsInfo={postsInfo}/>
			</div>
		</div>
	);
};

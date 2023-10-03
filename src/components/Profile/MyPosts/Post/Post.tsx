import React from 'react';
import s from "./Post.module.css"
import uchihaLogo from "./../../../../images/uchiha-logo.png"
type PostPropsType = {
	postText: string
	likesCount: number
}
export const Post: React.FC<PostPropsType> = ({postText, likesCount}) => {
	return (
		<div className={s.post_wrapper}>
			<div className={s.post_logo_likesCount_wrapper}>
				<img src={uchihaLogo} alt="Uchiha logo" />
				<div>like(s): {likesCount}</div>
			</div>
			<div>{postText}</div>
		</div>
	);
};

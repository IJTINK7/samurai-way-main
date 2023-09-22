import React from 'react';
import s from "./Post.module.css"
import uchihaLogo from "./../../../../images/uchiha-logo.png"
type PostPropsType = {
	postText: string
}
export const Post: React.FC<PostPropsType> = ({postText}) => {
	return (
		<div className={s.profile_wrapper}>
			<img src={uchihaLogo} alt="Uchiha logo" width="50px" style={{borderRadius: "50%"}}/>
			<span>{postText}</span>
		</div>
	);
};

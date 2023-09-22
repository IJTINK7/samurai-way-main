import React, {ChangeEvent, useState} from 'react';
import s from "./Profile.module.css"
import img from "./../../images/obita-uchiha-sage-of-six-paths.jpg"
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
	return (
		<div className={s.profile_wrapper}>
			<div>
				Obito Uchiha
			</div>
			<div>
				<img src={img} alt="obita-uchiha-sage-of-six-paths" width="500px"/>
			</div>
			<div>
				<MyPosts/>
			</div>
		</div>
	);
};

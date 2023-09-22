import React from 'react';
import s from "./Profile.module.css"

export const Profile = () => {
	return (
		<div className={s.profile_wrapper}>
			Content
			<div>
				<input type="text" className={s.profile_wrapper_input}/>
				<button className={s.profile_wrapper_button}>Add Post</button>
			</div>
		</div>
	);
};

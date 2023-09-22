import React from "react";
import s from "./Navigation.module.css"
export const Navigation = () => {
	return(
		<div className={s.navigation_wrapper}>
			<div>Home</div>
			<div>Messages</div>
			<div>News</div>
			<div>Feed</div>
		</div>
	);
}
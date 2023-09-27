import React from "react";
import s from "./Navigation.module.css"
export const Navigation = () => {
	return(
		<div className={s.navigation_wrapper}>
			<div><a href="/home">Home</a></div>
			<div><a href="/dialogs">Dialogs</a></div>
			<div><a href="/news">News</a></div>
			<div><a href="/feed">Feed</a></div>
		</div>
	);
}
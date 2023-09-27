import React from "react";
import s from "./Navigation.module.css"
import {NavLink} from "react-router-dom";
export const Navigation = () => {
	return(
		<div className={s.navigation_wrapper}>
			<div><NavLink to="/home">Home</NavLink></div>
			<div><NavLink to="/dialogs">Dialogs</NavLink></div>
			<div><NavLink to="/news">News</NavLink></div>
			<div><NavLink to="/feed">Feed</NavLink></div>
		</div>
	);
}
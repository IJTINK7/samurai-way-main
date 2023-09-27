import React from "react";
import s from "./Navigation.module.css"
import {NavLink} from "react-router-dom";
export const Navigation = () => {
	return(
		<div className={s.navigation_wrapper}>
			<div><NavLink to="/home" className={({isActive})=>isActive ? s.activeLink : s.navLink}>Home</NavLink></div>
			<div><NavLink to="/dialogs" className={({isActive})=>isActive ? s.activeLink : s.navLink}>Dialogs</NavLink></div>
			<div><a href="/news">News</a></div>
			<div><a href="/feed">Feed</a></div>
		</div>
	);
}
import React from "react";
import s from "./Navigation.module.css"
import {NavLink} from "react-router-dom";
export const Navigation = () => {
	return(
	<div className={s.navigation_wrapper}>
		<div><NavLink to={"/home"} className={({isActive}) => (isActive ? s.activeLink : s.inactiveLink)}>Home</NavLink></div>
		<div><NavLink to={"/dialogs"} className={({isActive}) => (isActive ? s.activeLink : s.inactiveLink)}>Dialogs</NavLink></div>
		<div><NavLink to={"/news"} className={({isActive}) => (isActive ? s.activeLink : s.inactiveLink)}>News</NavLink></div>
		<div><NavLink to={"/settings"} className={({isActive}) => (isActive ? s.activeLink : s.inactiveLink)}>Feed</NavLink></div>
	</div>
);
}

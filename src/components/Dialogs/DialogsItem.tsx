import React from 'react';
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

type PropsType = {
	navigationLink: string
	title: string
}
export const DialogsItem: React.FC<PropsType> = ({navigationLink, title}) => {
	return (
		<div className={s.dialogs_item}><NavLink to={navigationLink} className={({isActive})=>isActive ? s.activeLink : s.navLink}>{title}</NavLink></div>
	);
};
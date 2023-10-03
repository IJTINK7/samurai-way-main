import React from 'react';
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

type PropsType = {
	id: number
	title: string
}
export const DialogsItem: React.FC<PropsType> = ({id, title}) => {
	return (
		<div className={s.dialogs_item}><NavLink to={`/dialogs/${id}`} className={({isActive})=>isActive ? s.activeLink : s.navLink}>{title}</NavLink></div>
	);
};
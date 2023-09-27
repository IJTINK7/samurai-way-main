import React from 'react';
import s from "./Dialogs.module.css";

type PropsType = {
	title: string
}
export const DialogsMessage: React.FC<PropsType> = ({title}) => {
	return (
		<div className={s.dialogs_message}>{title}</div>
	);
};
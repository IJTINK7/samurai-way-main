import React from 'react';
import s from "./Dialogs.module.css"
type PropsType = {}
export const Dialogs: React.FC<PropsType> = () => {
	return (
		<div className={s.dialogs_wrapper}>
			Dialogs
		</div>
	);
};
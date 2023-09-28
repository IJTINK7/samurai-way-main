import React from 'react';
import s from "./Dialogs.module.css"
import {DialogsItem} from "./DialogsItem";
import {DialogsMessage} from "./DialogsMessage";
type PropsType = {}
export const Dialogs: React.FC<PropsType> = () => {
	return (
		<div className={s.dialogs_wrapper}>
			<div className={s.dialogs_items}>
				<DialogsItem id={"/dialogs/1"} title={"Minato"}/>
				<DialogsItem id={"/dialogs/2"} title={"Kakashi"}/>
				<DialogsItem id={"/dialogs/3"} title={"Rin"}/>
			</div>
			<div className={s.dialogs_messages}>
				<DialogsMessage title={"You and I will become Hokage."}/>
				<DialogsMessage title={"Do you know what happens to people who break the rules?"}/>
				<DialogsMessage title={"Become Hokage and show me how you'll save the world!"}/>
			</div>
		</div>
	);
};
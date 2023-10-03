import React from 'react';
import s from "./Dialogs.module.css"
import {DialogsItem} from "./DialogsItem";
import {DialogsMessage} from "./DialogsMessage";
import {DialogsDataType, DialogsMessagesType} from "../../App";
type PropsType = {
	dialogsData: DialogsDataType
	dialogsMessages: DialogsMessagesType
}
export const Dialogs: React.FC<PropsType> = ({dialogsData,dialogsMessages}) => {
	return (
		<div className={s.dialogs_wrapper}>
			<div className={s.dialogs_items}>
				<DialogsItem id={dialogsData[0].id} title={dialogsData[0].name}/>
				<DialogsItem id={dialogsData[1].id} title={dialogsData[1].name}/>
				<DialogsItem id={dialogsData[2].id} title={dialogsData[2].name}/>
			</div>
			<div className={s.dialogs_messages}>
				<DialogsMessage title={dialogsMessages[0].title}/>
				<DialogsMessage title={dialogsMessages[1].title}/>
				<DialogsMessage title={dialogsMessages[2].title}/>
			</div>
		</div>
	);
};
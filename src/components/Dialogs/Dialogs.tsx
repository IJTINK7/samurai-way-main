import React from 'react';
import s from "./Dialogs.module.css"
import {DialogsItem} from "./DialogsItem";
import {DialogsMessage} from "./DialogsMessage";
import {DialogsDataType, DialogsMessagesType} from "../../index";

type PropsType = {
	dialogsData: DialogsDataType
	dialogsMessages: DialogsMessagesType
}
export const Dialogs: React.FC<PropsType> = ({dialogsData,dialogsMessages}) => {
	return (
		<div className={s.dialogs_wrapper}>
			<div className={s.dialogs_items}>
				{dialogsData.map(el=><DialogsItem id={el.id} title={el.name}/>)}
			</div>
			<div className={s.dialogs_messages}>
				{dialogsMessages.map(el=><DialogsMessage title={el.title}/>)}
			</div>
		</div>
	);
};
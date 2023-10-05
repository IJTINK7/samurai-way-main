import React from 'react';
import s from "./Dialogs.module.css"
import {DialogsItem} from "./DialogsItem";
import {DialogsMessage} from "./DialogsMessage";
import {DialogsItemsType, DialogsMessagesType} from "../../state/state";


type PropsType = {
	dialogsItems: DialogsItemsType
	dialogsMessages: DialogsMessagesType
}
export const Dialogs: React.FC<PropsType> = ({dialogsItems,dialogsMessages}) => {
	return (
		<div className={s.dialogs_wrapper}>
			<div className={s.dialogs_items}>
				{dialogsItems.map(el=><DialogsItem id={el.id} title={el.name}/>)}
			</div>
			<div className={s.dialogs_messages}>
				{dialogsMessages.map(el=><DialogsMessage title={el.title}/>)}
			</div>
		</div>
	);
};
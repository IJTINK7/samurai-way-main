import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css"
import {DialogsItem} from "./DialogsItem";
import {DialogsMessage} from "./DialogsMessage";
import {ActionType, DialogsPageType} from "../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";

type DialogsPageMainType ={
	dialogsPage: DialogsPageType
	dispatch: (action: ActionType) => void
}

export const Dialogs: React.FC<DialogsPageMainType> = ({dialogsPage, dispatch}) => {
	const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		dispatch(updateNewMessageBodyAC(e.currentTarget.value))
	}
	const onSendMessageClick = () => {
		dispatch(sendMessageAC())
	}
	return (
		<div className={s.dialogs_wrapper}>
			<div className={s.dialogs_items}>
				{dialogsPage.dialogsItems.map(el => <DialogsItem id={el.id} title={el.name}/>)}
			</div>
			<div className={s.dialogs_messages}>
				<div>{dialogsPage.dialogsMessages.map(el => <DialogsMessage title={el.title}/>)}</div>
				<div>
					<div><textarea value={dialogsPage.newMessageBody} onChange={onNewMessageChange} placeholder={"Enter your message"}></textarea></div>
					<div><button onClick={onSendMessageClick}>Send</button></div>
				</div>
			</div>
		</div>
	);
};
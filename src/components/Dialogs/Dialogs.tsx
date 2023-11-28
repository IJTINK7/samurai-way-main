import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css"
import {DialogsItem} from "./DialogsItem";
import {DialogsMessage} from "./DialogsMessage";
import {DialogsPageType, sendMessageAC, store, updateNewMessageBodyAC} from "../../state/state";

export const Dialogs: React.FC<DialogsPageType> = ({dialogsItems, dialogsMessages, newMessageBody}) => {
	const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		let body = e.currentTarget.value
		store.dispatch(updateNewMessageBodyAC(body))
	}
	const onSendMessageClick = () => {
		store.dispatch(sendMessageAC())
	}
	return (
		<div className={s.dialogs_wrapper}>
			<div className={s.dialogs_items}>
				{dialogsItems.map(el => <DialogsItem id={el.id} title={el.name}/>)}
			</div>
			<div className={s.dialogs_messages}>
				<div>{dialogsMessages.map(el => <DialogsMessage title={el.title}/>)}</div>
				<div>
					<div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder={"Enter your message"}></textarea></div>
					<div><button onClick={onSendMessageClick}>Send</button></div>
				</div>
			</div>
		</div>
	);
};
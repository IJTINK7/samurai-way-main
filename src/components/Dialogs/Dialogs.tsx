import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css"
import {DialogsItem} from "./DialogsItem";
import {DialogsMessage} from "./DialogsMessage";
import {DialogsPageType} from "../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "../../redux/redux-store";

export const Dialogs = () => {
	let state = useSelector<RootReducerType, DialogsPageType>(store => store.dialogs)
	let dispatch = useDispatch()
	const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		dispatch(updateNewMessageBodyAC(e.currentTarget.value))
	}
	const onSendMessageClick = () => {
		dispatch(sendMessageAC())
	}
	return (
		<div className={s.dialogs_wrapper}>
			<div className={s.dialogs_items}>
				{state.dialogsItems.map(el => <DialogsItem id={el.id} title={el.name}/>)}
			</div>
			<div className={s.dialogs_messages}>
				<div>{state.dialogsMessages.map(el => <DialogsMessage title={el.title}/>)}</div>
				<div>
					<div><textarea value={state.newMessageBody} onChange={onNewMessageChange} placeholder={"Enter your message"}></textarea></div>
					<div><button onClick={onSendMessageClick}>Send</button></div>
				</div>
			</div>
		</div>
	);
};
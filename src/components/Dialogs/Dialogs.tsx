import React from 'react';
import s from "./Dialogs.module.css"
import {DialogsItem} from "./DialogsItem";
import {DialogsMessage} from "./DialogsMessage";
import {DialogsDataType} from "../../App";
type PropsType = {
	dialogsData: DialogsDataType
}
export const Dialogs: React.FC<PropsType> = (props: PropsType) => {
	return (
		<div className={s.dialogs_wrapper}>
			<div className={s.dialogs_items}>
				<DialogsItem id={props.dialogsData[0].id} title={props.dialogsData[0].name}/>
				<DialogsItem id={props.dialogsData[1].id} title={props.dialogsData[1].name}/>
				<DialogsItem id={props.dialogsData[2].id} title={props.dialogsData[2].name}/>
			</div>
			<div className={s.dialogs_messages}>
				<DialogsMessage title={"You and I will become Hokage."}/>
				<DialogsMessage title={"Do you know what happens to people who break the rules?"}/>
				<DialogsMessage title={"Become Hokage and show me how you'll save the world!"}/>
			</div>
		</div>
	);
};
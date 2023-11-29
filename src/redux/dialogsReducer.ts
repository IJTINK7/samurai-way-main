import {DialogsPageType} from "./state";

export const dialogsReducer = (state: DialogsPageType, action: DialogsReducerMainActionType):DialogsPageType  => {
	switch (action.type) {
		case "UPDATE-NEW-MESSAGE-BODY":
			state.newMessageBody = action.payload.body
			return state;
		case "SEND-MESSAGE":
			let body = state.newMessageBody;
			state.newMessageBody = ""
			state.dialogsMessages.push({id: 4, title: body})
			return state;
		default:
			return state;
	}
}

export type DialogsReducerMainActionType = UpdateNewMessageBodyACType | SendMessageACType

export type UpdateNewMessageBodyACType = ReturnType<typeof updateNewMessageBodyAC>
export type SendMessageACType = ReturnType<typeof sendMessageAC>

export const updateNewMessageBodyAC = (body: string) => {
	return {
		type: "UPDATE-NEW-MESSAGE-BODY",
		payload:{body}
	} as const
}
export const sendMessageAC = () => {
	return {
		type: "SEND-MESSAGE",
	} as const
}
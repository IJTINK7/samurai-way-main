import {ActionType, DialogsPageType} from "./store";

let initialState: DialogsPageType = {
	dialogsItems: [],
	dialogsMessages: [],
	newMessageBody: ""
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionType):DialogsPageType  => {
	switch (action.type) {
		case "UPDATE-NEW-MESSAGE-BODY":
			return {
				...state, newMessageBody: action.payload.body
			}
		case "SEND-MESSAGE":
			let body = state.newMessageBody;
			let newMessage = {id: Number(Date.now()), title: body}
			return {
				...state,
				newMessageBody: "",
				dialogsMessages: [...state.dialogsMessages, newMessage]
			}
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
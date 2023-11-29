export const dialogsReducer = (state: any, action: any) => {
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
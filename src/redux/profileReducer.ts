import {PostsInfoType, ProfilePageType} from "./state";

export const profileReducer = (state: ProfilePageType, action: ProfileReducerMainActionType):ProfilePageType => {
	switch (action.type) {
		case "ADD-POST" :
			let newPost: PostsInfoType = {id: 4, postText: state.newPostText, likesCount: 0};
			state.posts.push(newPost);
			state.newPostText = "";
			return state;
		case "UPDATE-NEW-POST-TEXT":
			state.newPostText = action.payload.newText;
			return state;
		default:
			return state;
	}
}

export type ProfileReducerMainActionType = AddPostACType | OnPostChangeHandlerACType

export type AddPostACType = ReturnType<typeof addPostAC>
export type OnPostChangeHandlerACType = ReturnType<typeof onPostChangeHandlerAC>

export const addPostAC = () => {
	return {
		type: "ADD-POST"
	} as const
}
export const onPostChangeHandlerAC = (newText: string) => {
	return {
		type: "UPDATE-NEW-POST-TEXT",
		payload: {newText}
	} as const
}
import {PostsInfoType, ProfilePageType} from "./state";

let initialState: ProfilePageType = {
	posts: [],
	newPostText: ""
}
let ADD_POST = "ADD-POST"
let UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileReducerMainActionType):ProfilePageType => {
	switch (action.type) {
		case "ADD-POST" :
			let newPost: PostsInfoType = {id: 4, postText: state.newPostText, likesCount: 0};
			return {
				...state, posts: [...state.posts, newPost], newPostText: ""
			}
		case "UPDATE-NEW-POST-TEXT":
			return {
				...state, newPostText: action.payload.newText
			}
		default:
			return state;
	}
}

export type ProfileReducerMainActionType = AddPostACType | OnPostChangeHandlerACType

export type AddPostACType = ReturnType<typeof addPostAC>
export type OnPostChangeHandlerACType = ReturnType<typeof onPostChangeHandlerAC>

export const addPostAC = () => {
	return {
		type: ADD_POST
	} as const
}
export const onPostChangeHandlerAC = (newText: string) => {
	return {
		type: UPDATE_NEW_POST_TEXT,
		payload: {newText}
	} as const
}
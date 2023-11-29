import {PostsInfoType} from "./state";

export const profileReducer = (state: any, action: any) => {
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
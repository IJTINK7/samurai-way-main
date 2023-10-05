export type StateType = {
	profilePage: {postsInfo: PostsInfoType}
	dialogsPage:{
		dialogsItems: DialogsItemsType
		dialogsMessages: DialogsMessagesType
	}
}

export type DialogsItemsType = {id: number, name: string}[]
export type DialogsMessagesType = {id: number, title: string}[]

export type PostsInfoType = {id: number, postText: string, likesCount: number}[]

export const state: StateType = {
	profilePage: {
		postsInfo: [
			{id: 1, postText: "I am Obito Uchiha and I will surpass you once I awaken my Sharingan!", likesCount: 3},
			{id: 2, postText: "There is no such thing as peace in this world — that is reality.", likesCount: 5},
			{id: 3, postText: "I don’t feel pain, I don’t feel anything!", likesCount: 7},
		]
	},
	dialogsPage:{
		dialogsItems: [
			{id: 1, name: "Minato"},
			{id: 2, name: "Kakashi"},
			{id: 3, name: "Rin"},
		],
		dialogsMessages: [
			{id: 1, title: "You and I will become Hokage."},
			{id: 2,title: "Do you know what happens to people who break the rules?"},
			{id: 3,title: "Become Hokage and show me how you'll save the world!"},
		]
	}
}
export const addPost = (postMessage: string) => {
	const newPost = {id: 4, postText: postMessage, likesCount:0}
	return {...state, profilePage: {...state.profilePage, postsInfo: [...state.profilePage.postsInfo, newPost]} }
}
export type StateType = {
	profilePage: ProfilePageType
	dialogsPage: DialogsPageType
}
export type ProfilePageType = {
	posts: PostsInfoType
	newPostText: string
}
export type DialogsPageType = {
	dialogsItems: DialogsItemsType
	dialogsMessages: DialogsMessagesType
}

export type DialogsItemsType = {id: number, name: string}[]
export type DialogsMessagesType = {id: number, title: string}[]

export type PostsInfoType = {id: number, postText: string, likesCount: number}[]

export const state: StateType = {
	profilePage: {
		posts: [
			{id: 1, postText: "I am Obito Uchiha and I will surpass you once I awaken my Sharingan!", likesCount: 3},
			{id: 2, postText: "There is no such thing as peace in this world — that is reality.", likesCount: 5},
			{id: 3, postText: "I don’t feel pain, I don’t feel anything!", likesCount: 7},
		],
		newPostText: ""
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

let rerenderEntireTree = () => {}

export const addPost = () => {
	let newPost = {id: 4, postText: state.profilePage.newPostText, likesCount: 0}
	state.profilePage.posts.push(newPost)
	rerenderEntireTree(state)
}

export const updateNewPostText = (newText: string) => {
	state.profilePage.newPostText = newText
	rerenderEntireTree(state);
}

export const subscribe = (observer: any)=> {
	rerenderEntireTree = observer
}
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

export type DialogsItemsType = { id: number, name: string }[]
export type DialogsMessagesType = { id: number, title: string }[]

export type PostsInfoType = { id: number, postText: string, likesCount: number }[]
export type StoreType = {
	_state: StateType
	getState: ()=> StateType
	callSubscriber:(state: StateType)=> void
	addPost:()=> void
	updateNewPostText:(newText: string)=> void
	subscribe:(observer: any)=> void
}

export const store: StoreType = {
	_state: {
		profilePage:{
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
			dialogsMessages:[
				{id: 1, title: "You and I will become Hokage."},
				{id: 2, title: "Do you know what happens to people who break the rules?"},
				{id: 3, title: "Become Hokage and show me how you'll save the world!"},
			]
		},
	},
	getState(){
		return this._state
	},
	callSubscriber (){
		console.log("123")
	},
	addPost(){
		let newPost = {id: 4, postText: this._state.profilePage.newPostText, likesCount: 0}
		this._state.profilePage.posts.push(newPost)
		this.callSubscriber(this._state)
	},
	updateNewPostText(newText){
		this._state.profilePage.newPostText = newText
		this.callSubscriber(this._state);
	},
	subscribe(observer: any){
		this.callSubscriber = observer
	},
}
// store - OOP object

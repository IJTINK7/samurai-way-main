import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {DialogsDataType, DialogsMessagesType, PostsInfoType} from "./state/state";



const postsInfo: PostsInfoType =[
	{id: 1, postText: "I am Obito Uchiha and I will surpass you once I awaken my Sharingan!", likesCount: 3},
	{id: 2, postText: "There is no such thing as peace in this world — that is reality.", likesCount: 5},
	{id: 3, postText: "I don’t feel pain, I don’t feel anything!", likesCount: 7},
]
const dialogsData: DialogsDataType = [
	{id: 1, name: "Minato"},
	{id: 2, name: "Kakashi"},
	{id: 3, name: "Rin"},
]
const dialogsMessages: DialogsMessagesType = [
	{id: 1, title: "You and I will become Hokage."},
	{id: 2,title: "Do you know what happens to people who break the rules?"},
	{id: 3,title: "Become Hokage and show me how you'll save the world!"},
]

ReactDOM.render(
    <App postsInfo={postsInfo} dialogsData={dialogsData} dialogsMessages={dialogsMessages}  />,
  document.getElementById('root')
);
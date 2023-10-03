import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navigation} from "./components/Navigation/Navigation";
import {Footer} from "./components/Footer/Footer";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
export type DialogsDataType = {id: number, name: string}[]
export type DialogsMessagesType = {id: number, title: string}[]
export type PostsInfoType = {id: number, postText: string, likesCount: number}[]

function App() {
	const dialogsData: DialogsDataType = [
		{id: 1, name: "Minato"},
		{id: 2, name: "Kakashi"},
		{id: 3, name: "Rin"},
		{id: 4, name: "Naruto"},
	]
	const dialogsMessages: DialogsMessagesType = [
		{id: 1, title: "You and I will become Hokage."},
		{id: 2,title: "Do you know what happens to people who break the rules?"},
		{id: 3,title: "Become Hokage and show me how you'll save the world!"},
		{id: 4,title: "Hey"},
	]
	const postsInfo =[
		{id: 1, postText: "I am Obito Uchiha and I will surpass you once I awaken my Sharingan!", likesCount: 3},
		{id: 2, postText: "There is no such thing as peace in this world — that is reality.", likesCount: 5},
		{id: 3, postText: "I don’t feel pain, I don’t feel anything!", likesCount: 7},
	]
		return (
		<BrowserRouter>
			<div className="App">
				<Header/>
				<div className={"navigation_content_container"}>
					<Navigation/>
					<div className={"content_container"}>
						<Routes>
							<Route path="/" element={<div>Разбей все компоненты на мелкие и навесь стили hovera при наведении на элементы навигации и имена в диалогах</div>}/>
							<Route path="/home/*" element={<Profile postsInfo={postsInfo}/>}/>
							<Route path="/dialogs/*" element={<Dialogs dialogsData={dialogsData} dialogsMessages={dialogsMessages}/>}/>
						</Routes>
					</div>
				</div>
				<Footer/>
			</div>
		</BrowserRouter>
	);
}

export default App;




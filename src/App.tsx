import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navigation} from "./components/Navigation/Navigation";
import {Footer} from "./components/Footer/Footer";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DialogsDataType, DialogsMessagesType, PostsInfoType} from "./index";

type AppPropsType = {
	postsInfo: PostsInfoType
	dialogsData: DialogsDataType
	dialogsMessages: DialogsMessagesType
}

const App: React.FC<AppPropsType> = ({postsInfo, dialogsData,dialogsMessages})=>{

		return (
		<BrowserRouter>
			<div className="App">
				<Header/>
				<div className={"navigation_content_container"}>
					<Navigation/>
					<div className={"content_container"}>
						<Routes>
							<Route path="/" element={<div>Разбей все компоненты на мелкие и навесь стили hover при наведении на элементы навигации и имена в диалогах</div>}/>
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




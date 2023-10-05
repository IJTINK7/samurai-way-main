import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navigation} from "./components/Navigation/Navigation";
import {Footer} from "./components/Footer/Footer";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {StateType} from "./state/state";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";

type AppPropsType = {
	state: StateType
	addPost:(postMessage: string)=> void
	updateNewPostText: (newText: string)=> void
}

const App: React.FC<AppPropsType> = ({state, addPost, updateNewPostText})=>{

		return (
			<div className="App">
				<Header/>
				<div className={"navigation_content_container"}>
					<Navigation/>
					<div className={"content_container"}>
						<Routes>
							<Route path="/" element={<Profile profilePage={state.profilePage} addPost={addPost}/>}/>
							<Route path="/home/*" element={<Profile profilePage={state.profilePage} addPost={addPost} updateNewPostText={updateNewPostText}/>}/>
							<Route path="/dialogs/*"
								   element={<Dialogs dialogsItems={state.dialogsPage.dialogsItems}
													 dialogsMessages={state.dialogsPage.dialogsMessages}/>}/>
							<Route path="/news/*" element={<News/>}/>
							<Route path="/settings/*" element={<Settings/>}/>
						</Routes>
					</div>
				</div>
				<Footer/>
			</div>
	);
}

export default App;




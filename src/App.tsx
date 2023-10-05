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
}

const App: React.FC<AppPropsType> = ({state})=>{

		return (
		<BrowserRouter>
			<div className="App">
				<Header/>
				<div className={"navigation_content_container"}>
					<Navigation/>
					<div className={"content_container"}>
						<Routes>
							<Route path="/" element={<Profile postsInfo={state.profilePage.postsInfo}/>}/>
							<Route path="/home/*" element={<Profile postsInfo={state.profilePage.postsInfo}/>}/>
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
		</BrowserRouter>
	);
}

export default App;




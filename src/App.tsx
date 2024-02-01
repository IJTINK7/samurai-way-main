import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navigation} from "./components/Navigation/Navigation";
import {Footer} from "./components/Footer/Footer";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Profile} from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {ActionType, StateType} from "./redux/store";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";

type AppPropsType = {
	state: StateType
	dispatch: (action: ActionType) => void
}

const App: React.FC<AppPropsType> = ({state, dispatch}) => {

	return (
		<div className="App">
			<Header/>
			<div className={"navigation_content_container"}>
				<Navigation/>
				<div className={"content_container"}>
					<Routes>
						<Route path="/" element={<Profile profilePage={state.profilePage} dispatch={dispatch}/>}/>
						<Route path="/home/*" element={<Profile profilePage={state.profilePage} dispatch={dispatch}/>}/>
						<Route path="/dialogs/*"
							   element={<Dialogs dialogsPage={state.dialogsPage}
												 dispatch={dispatch}
							   />}/>
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




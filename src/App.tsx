import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navigation} from "./components/Navigation/Navigation";
import {Footer} from "./components/Footer/Footer";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Profile} from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";

const App = () => {
	return (
		<div className="App">
			<Header/>
			<div className={"navigation_content_container"}>
				<Navigation/>
				<div className={"content_container"}>
					<Routes>
						<Route path="/" element={<Profile/>}/>
						<Route path="/home/*" element={<Profile/>}/>
						<Route path="/dialogs/*"
							   element={<Dialogs/>}/>
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




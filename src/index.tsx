import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, state, StateType, subscribe, updateNewPostText} from "./state/state";

const rerenderEntireTree = (state: StateType) => {
	return ReactDOM.render(
		<BrowserRouter>
			<App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
		</BrowserRouter>,
		document.getElementById('root')
	);
}
rerenderEntireTree(state);
subscribe(rerenderEntireTree);
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {StateType, store} from "./state/state";

const rerenderEntireTree = (state: StateType) => {
	return ReactDOM.render(
		<BrowserRouter>
			<App state={store.getState()} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}/>
		</BrowserRouter>,
		document.getElementById('root')
	);
}
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state} from "./state/state";

ReactDOM.render(
    <App postsInfo={state.postsInfo} dialogsData={state.dialogsData} dialogsMessages={state.dialogsMessages}  />,
  document.getElementById('root')
);
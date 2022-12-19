import React from 'react';
import './App.css';
import "./12-Components/Header.css"
import {Header} from "./12-Components/Header";
import {Navigation} from "./12-Components/Navigation";
import {Content} from "./12-Components/Content";

function App() {
  return (
    <div className="app-wrapper">
      <Header/>
      <main className="main">
          <Navigation/>
          <Content/>
      </main>
    </div>
  );
}

export default App;

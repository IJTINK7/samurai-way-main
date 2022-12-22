import React from 'react';
import './App.css';
import "./Header/Header.css";
import {Header} from "./Header/Header";
import {Navigation} from "./Navbar/Navigation";
import {Content} from "./Profile/Content";

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

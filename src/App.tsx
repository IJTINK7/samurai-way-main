import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Navigation} from "./components/Navigation";
import {Content} from "./components/Content";
import {Footer} from "./components/Footer";

function App() {
  return (
    <div className="App">
        <Header/>
        <div className={"navigation_content_container"}>
            <Navigation/>
            <Content/>
        </div>
      <Footer/>
    </div>
  );
}

export default App;




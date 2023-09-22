import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Navigation} from "./components/Navigation";
import {Profile} from "./components/Profile";
import {Footer} from "./components/Footer";

function App() {
  return (
    <div className="App">
        <Header/>
        <div className={"navigation_profile_container"}>
            <Navigation/>
            <Profile/>
        </div>
      <Footer/>
    </div>
  );
}

export default App;




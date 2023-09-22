import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navigation} from "./components/Navigation/Navigation";
import {Profile} from "./components/Profile/Profile";
import {Footer} from "./components/Footer/Footer";

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




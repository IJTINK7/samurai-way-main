import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navigation} from "./components/Navigation/Navigation";
import {Footer} from "./components/Footer/Footer";
import {Dialogs} from "./components/Dialogs/Dialogs";

function App() {
  return (
    <div className="App">
        <Header/>
        <div className={"navigation_profile_container"}>
            <Navigation/>
            {/*<Profile/>*/}
            <Dialogs/>
        </div>
      <Footer/>
    </div>
  );
}

export default App;




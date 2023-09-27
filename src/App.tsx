import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navigation} from "./components/Navigation/Navigation";
import {Footer} from "./components/Footer/Footer";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Header/>
              <div className={"navigation_content_container"}>
                  <Navigation/>
                  <div className={"content_container"}>
                      <Routes>
                          <Route path="/home" element={<Profile/>}/>
                          <Route path="/dialogs" element= {<Dialogs/>}/>
                      </Routes>
                  </div>
              </div>



              <Footer/>
          </div>
      </BrowserRouter>
  );
}

export default App;




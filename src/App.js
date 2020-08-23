import React, { useState, useContext } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import Lists from './components/Lists';
import Maps from './components/Maps';
import Favoris from './components/Favoris';
import SinglePlace from './components/SinglePlace'; 
import SideBar from './components/Home/SideBar';
import Header from './components/Home/Header';
import Road from './components/Road'
import {ThemeContext} from "./components/Layouts/ThemeContext";
export const AvatarContext  = React.createContext() ;




function App() {

  const existingLatitude = localStorage.getItem("latitude");

  const [latitude, setLatitude] = useState(existingLatitude);

  const setActiveLatitude = (data) => {
    localStorage.setItem("latitude", data);
    setLatitude(data);
  };

  const existingLongitude = localStorage.getItem("longitude");

  const [longitude, setLongitude] = useState(existingLongitude);

  const setActiveLongitude = (data) => {
    localStorage.setItem("longitude", data);
    setLongitude(data);
  };

  const existingAccuracy = localStorage.getItem("accuracy");

  const [accuracy, setAccuracy] = useState(existingAccuracy);

  const setActiveAccuracy = (data) => {
    localStorage.setItem("accuracy", data);
    setAccuracy(data);
  };

  const [conect, setConect] = useState("");

  


  const [render, setRendering ] = useState(false);
  const [openModel, setOpen ] = useState(false);
// const openModalAvatar = true

    const contextValue = {
    render,
    setRendering, 
    };





  return (
    <ThemeContext.Provider value={{contextValue, latitude, setLatitude: setActiveLatitude, longitude, setLongitude: setActiveLongitude, accuracy, setAccuracy: setActiveAccuracy }}> 
<AvatarContext.Provider value = {{openModel , setOpen }}>
    <Router>
      <div className="bg_parallax" id="inb">
        <Header />
        <Switch>

          {(localStorage.usertoken !== "") ?
            <>
            <SideBar />
              <Route path='/map' exact>
                <Maps />
              </Route>

              <Route path='/services' exact>
                <Lists />
              </Route>
              

              <Route path='/favorites' >
                <Favoris />
              </Route>

              <Route path='/map/:id' component={Road} />
              <Route path='/services/:id' component={SinglePlace} exact/>
              <Route path='/' exact >
              < Home />
            </Route>

            </>
            :
<>
            {/* <Redirect to = '/' /> */}
            <Route path='/' >
              < Home />
            </Route>
</>
          }

        </Switch>
      </div>
    </Router> 
    </AvatarContext.Provider>
    </ThemeContext.Provider> 

  )
}

export default App;

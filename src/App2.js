import React, { useState, useContext } from "react";
import './App.css';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Lists from './components/Lists';
import Maps from './components/Maps';
import Favoris from './components/Favoris';
import SinglePlace from './components/SinglePlace';
import $ from "jquery" ;
import SideBar from './components/Home/SideBar';
import Header from './components/Home/Header';
import Road from './components/Road'
// import './loader.js'
const PrivateRoute = ({ component: Component, ...rest }) => {
  // const { user } = useContext(UserContext);


  if (localStorage.usertoken !== "") {
    return (
    <>
    <Route path='/map' exact><Maps /></Route>
     <Route path='/services' exact><Lists /></Route>
     <Route path='/favorites' ><Favoris /></Route>
     </>
     )
  } else {
    return <Component/>;
  }

};
function App() {

  const [conect, setConect] = useState("");

  const contextValue = {
    conect,
    updateConect: setConect
  };


  if (localStorage.usertoken !== "") {

    var sidebar =  <SideBar />
    // var map = (<Route path='/map' exact><Maps /></Route>);
    // var list = (<Route path='/services' exact><Lists /></Route>);
    // var favori = (<Route path='/favorites' ><Favoris /></Route>);

  } else {
    var sidebar =   < Home />
    // var map = ''
    // var list = '';
    // var favori = '';
  }
  
  return (

     <Router>
        <div className="bg_parallax" id="inb">

        <Header />
     { sidebar}

        <Switch>
<PrivateRoute path = '/' component = {Home} />
{/* <React.StrictMode> */}
          <Route path='/' exact>
            < Home />
          </Route>
{/* </React.StrictMode> */}

{/* {map}
{list}
{favori} */}

<Route path='/map/:id' component={Road} />
<Route path='/services/:id' component={SinglePlace} />


     {/* <React.StrictMode> */}
      <Route path='/place'>
         <SinglePlace />
       </Route>
     {/* </React.StrictMode> */}

        </Switch>
        </div>
        </Router>


  );
}

export default App;

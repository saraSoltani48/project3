import React from 'react';
import './App.css';

import {BrowserRouter,Route,Switch} from "react-router-dom";

import ListRestaurant from './Components/Restaurants/ListRestaurant';
import ListMenu from './Components/OurMenu/ListMenu';
import Galery from "./Galery/Galery"

import UserReservation from "./Components/Users/UserReservation";

import Butreserv from "./Components/Reservation/Butreserv";
//---------Dashboard Admin----------
import DashbAdminUsers from "./Components/Admin/DashbAdminUsers";
import DashbAdminRestau from "./Components/Admin/DashAdminRestau";
//-------------Auth-----------------
import Register from "./Components/Ahthentificat/Register"
import UserInfo from "./Components/Users/UserInfo";
import Login from "./Components/Ahthentificat/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ListRestaurant}/>
        <Route exact path="/menu/:id" component={ListMenu}>
          
         {/* <ListMenu/> */}
        
          </Route>
          <Route  exact path="/galery" component={Galery} />
          <Route
        exact
        path={`${process.env.PUBLIC_URL}/reservationPage`}
        component={UserReservation}
      />
     
 <Route
        exact
        path={`${process.env.PUBLIC_URL}/butserv`}
        component={Butreserv}
      />

<Route
        exact
        path={`${process.env.PUBLIC_URL}/dashboard`}
        component={DashbAdminUsers}
      />
<Route
        exact
        path={`${process.env.PUBLIC_URL}/dashboardadmin_restau`}
        component={DashbAdminRestau}
      />
<Route
        exact
        path={`${process.env.PUBLIC_URL}/register`}
        component={Register}
      />
<Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
 <Route
        exact
        path={`${process.env.PUBLIC_URL}/userinfo`}
        component={UserInfo}
      />
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;

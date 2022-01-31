import {useState, useEffect} from "react";
import Home from "./pages/homePage/index";
import ListTripPage from "./pages/listTripsPage";
import ApplicationFormPage from "./pages/applicationFormPage";
import LoginPage from "./pages/loginPage";
import AdminHomePage from "./pages/adminHomePage";
import CreateTripPage from "./pages/createTripPage";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import TripDetailsPage from "./pages/tripDetailsPage";
import GlobalStyle from "./styles/global";

export default function App(){

  return(
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"}>
            <Home/>
          </Route>
          <Route exact path={"/trips/list"}>
            <ListTripPage/>
          </Route>
          <Route exact path={"/form/application"}>
            <ApplicationFormPage/>
          </Route>
          <Route exact path={"/login"}>
            <LoginPage/>
          </Route>
          <Route exact path={"/admin"}>
            <AdminHomePage/>
          </Route>
          <Route exact path={"/trip/create"}>
            <CreateTripPage/>
          </Route>
        </Switch>
        <Route exact path={"/trip/details/:id"}>
            <TripDetailsPage/>
        </Route>
        <GlobalStyle/>
      </BrowserRouter>
  )
  
}

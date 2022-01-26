import {useState, useEffect} from "react";
import Home from "./pages/homePage/index";
import ListTripPage from "./pages/listTripsPage";
import ApplicationFormPage from "./pages/applicationFormPage";
import LoginPage from "./pages/loginPage";

export default function App(){

  return(
    <div>
      {/* <Home/> */}
      {/* <ListTripPage/> */}
      <ApplicationFormPage/>
      {/* <LoginPage/> */}
    </div>
  )
  
}

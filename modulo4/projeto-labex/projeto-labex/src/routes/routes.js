import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminHomePage from "../pages/adminHomePage/index";
import ApplicationFormPage from "../pages/applicationFormPage/index";
import CreateTripPage from "../pages/createTripPage/index";
import HomePage from "../pages/homePage/index";
import ListTripPage from "../pages/listTripsPage/index";
import LoginPage from "../pages/loginPage/index";
import TripDetailsPage from "../pages/tripDetailsPage/index";
import GlobalStyle from "../styles/global";

const ProtectedRoute = ({children, redirectTo}) =>{
    const isAutheticated = localStorage.getItem("token") !== null;
    return isAutheticated ? children : <Navigate to={redirectTo}/>
};

export default function MainRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/trips/list" element={<ListTripPage/>}/>
                <Route path="/trips/application" element={<ApplicationFormPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/admin/trips/list" element={
                    <ProtectedRoute redirectTo="/login">
                        <AdminHomePage/>
                    </ProtectedRoute>
                }/>
                <Route path="/admin/trips/create" element={<CreateTripPage/>}/>
                <Route path="/admin/trips/:id" element={
                    <ProtectedRoute redirectTo={"/login"}>
                        <TripDetailsPage/>
                    </ProtectedRoute>
                }/>                
                <Route path="*" element={<p>There's nothing here: 404!</p>} />
            </Routes>
            <GlobalStyle/>
        </BrowserRouter>
    );
};

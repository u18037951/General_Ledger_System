import {Route, Routes} from "react-router-dom"
import { AuthProvider } from "./Auth/Authentication"
import React,{ useEffect } from 'react';
import './../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from "./Dashboard";
import SignIn from "./SignIn";
import Assets from "./Assets/Assets";
function App() {
    return (

        <AuthProvider>
            <Routes>
                    {/* <Route exact path="/" component={Home}/>*/}
                    <Route exact path="/" element={<SignIn/>}></Route>
                    <Route exact path="/home" element={<Dashboard/>}/>
                    <Route exact path="/assets" element={<Assets/>}/>
                    {/*<PrivateRoute exact path="/landing" component={LandingPage}/>*/}
            </Routes>
        </AuthProvider>
    );
}

export default App;

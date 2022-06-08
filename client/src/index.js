import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Button from './components/Employee/AddEmployee'
import Assets from "./components/Assets/Assets";
import './index.css'
import firebase  from './components/Auth/Authentication';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import signIn from "./components/SignIn";
import Home from "./components/Dashboard";
import SignIn from "./components/SignIn";
let person;
firebase.auth().onAuthStateChanged(user => {
    person = user;
})
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="home" element={<Button />} />
                    <Route path="assets" element={<Assets />} />
                    <Route path="*" element={<App />} />
                </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

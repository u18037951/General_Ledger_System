import { auth } from "./Auth/Authentication";
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./css/dashboard.js"
import "./css/SideBar.css"
import "./Employee/Employee"
import SideBar from './SideBar'
import Employees from './Employee/Employee'
const Home = ({ user }) => {
    return (
        <div className="wrapper">
            <SideBar/>
            <div id="content">
             <Employees/>
            </div>
        </div>
    );
};

export default Home;
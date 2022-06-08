import { auth } from "./Auth/Authentication";
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./css/SideBar.css"

const SideBar = ({ user }) => {
    return (
     <nav id="sidebar">
         <div className="sidebar-header">
             <h3>WELCOME</h3>
         </div>

         <ul className="list-unstyled components">
             <p>Oracle Navigation Area</p>
             <li className="active">
                 <a href="#homeSubmenu">Employee</a>
             </li>
             <li>
                 <a href="#">Assets</a>
             </li>
             <li>
                 <a href="#pageSubmenu"
                    >Oracle Payable</a>
             </li>
             <li>
                 <a href="#">Assignment</a>
             </li>
             <li>
                 <a href="#">Contact</a>
             </li>
         </ul>
         <Button
             style={{margin: '5%'}}
             variant="outline-danger"
             type="submit"
             onClick={() => auth.signOut()}
         >
             Sign Out
         </Button>
     </nav>
    );
};

export default SideBar;
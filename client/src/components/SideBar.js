import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./css/SideBar.css"
import {useAuth} from "./Auth/Authentication";
import {Link, useNavigate} from 'react-router-dom';

const SideBar = ({ user }) => {
    const { logout, currentUser } = useAuth()
    const navigate = useNavigate();
    async function handleSubmit() {
        try {
            await logout()
            navigate('/');
        } catch(err)
        {

        }

    }
    return (
     <nav id="sidebar">
         <div className="sidebar-header">
             <h3>WELCOME</h3>
         </div>

         <ul className="list-unstyled components">
             <p>Oracle Navigation Area</p>
             <li className="items-center">
                 <Link
                     className={
                         "text-xs uppercase py-3 font-bold block " +
                         (window.location.href.indexOf("/home") !== -1
                             ? "text-lightBlue-500 hover:text-lightBlue-600"
                             : "text-blueGray-700 hover:text-blueGray-500")
                     }
                     to="/home"

                 >
                     <i
                         className={
                             "fas fa-chart-line mr-2 text-sm " +
                             (window.location.href.indexOf("/home") !== -1
                                 ? "opacity-75"
                                 : "text-blueGray-300")
                         }
                     />{" "}
                     Clients Page
                 </Link>
             </li>
             <li className="items-center">
                 <Link
                     className={
                         "text-xs uppercase py-3 font-bold block " +
                         (window.location.href.indexOf("/assets") !== -1
                             ? "text-lightBlue-500 hover:text-lightBlue-600"
                             : "text-blueGray-700 hover:text-blueGray-500")
                     }
                     to="/assets"

                 >
                     <i
                         className={
                             "fas fa-chart-line mr-2 text-sm " +
                             (window.location.href.indexOf("/assets") !== -1
                                 ? "opacity-75"
                                 : "text-blueGray-300")
                         }
                     />{" "}
                     Assets
                 </Link>
             </li>
             <li className="items-center">
                 <Link
                     className={
                         "text-xs uppercase py-3 font-bold block " +
                         (window.location.href.indexOf("/invoice") !== -1
                             ? "text-lightBlue-500 hover:text-lightBlue-600"
                             : "text-blueGray-700 hover:text-blueGray-500")
                     }
                     to="/invoice"

                 >
                     <i
                         className={
                             "fas fa-chart-line mr-2 text-sm " +
                             (window.location.href.indexOf("/invoice") !== -1
                                 ? "opacity-75"
                                 : "text-blueGray-300")
                         }
                     />{" "}
                     Oracle Payable
                 </Link>
             </li>
         </ul>

         <Button
         style={{margin: '5%'}}
         variant="outline-danger"
         type="submit"
         onClick={handleSubmit}
     >
         Sign Out
     </Button>

     </nav>
    );
};

export default SideBar;
import React from "react";
import SideBar from "../SideBar";
import Payables from "./Payables";
const PayablesInvoice = ({ user }) => {
    return (
        <div className="wrapper">
            <SideBar/>

            <div id="content">
                <Payables/>

            </div>
        </div>
    );
};

export default PayablesInvoice;
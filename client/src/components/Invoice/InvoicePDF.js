import React from "react";
import SideBar from "../SideBar";
import InvoiceInfo from "./InvoiceInfo";
import { useLocation } from 'react-router-dom';
const InvoicePDF = ({ user }) => {
    const location = useLocation();
    const { email } = location.state;
    const { Amount } = location.state;
    const { Price } = location.state;
    const { Street } = location.state;
    const { City } = location.state;
    const { code } = location.state;
    const { description } = location.state;
    const { name } = location.state;
    const { Date } = location.state;
    const { Quantity } = location.state;

    return (
        <div className="wrapper">
            <SideBar/>

            <div id="content">
                <InvoiceInfo Quantity={ Quantity} Amount={ Amount} email={ email} Price={ Price} Street={ Street} City={ City} code={ code}
                             description={ description} name={ name} Date={ Date}
                />

            </div>
        </div>
    );
};

export default InvoicePDF;
import {Route, Routes} from "react-router-dom"
import { AuthProvider } from "./Auth/Authentication"
import React,{ useEffect } from 'react';
import './../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UpdatePassword from "./Login/UpdatePassword";
import Dashboard from "./Dashboard";
import SignIn from "./SignIn";
import Assets from "./Assets/Assets";
import PayableInvoice from "./Payables/PayableInvoice";
import InvoicePDF from "./Invoice/InvoicePDF";
function App() {
    return (

        <AuthProvider>
            <Routes>
                    {/* <Route exact path="/" component={Home}/>*/}
                    <Route exact path="/" element={<SignIn/>}></Route>
                    <Route exact path="/home" element={<Dashboard/>}/>
                    <Route exact path="/assets" element={<Assets/>}/>
                      <Route exact path="/invoice" element={<PayableInvoice/>}/>
                     <Route exact path="/updatePassword" element={<UpdatePassword/>}/>
                <Route exact path="/invoicePDF" element={<InvoicePDF/>}/>
                <Route exact path="*" element={<SignIn/>}></Route>
                    {/*<PrivateRoute exact path="/landing" component={LandingPage}/>*/}
            </Routes>
        </AuthProvider>
    );
}

export default App;

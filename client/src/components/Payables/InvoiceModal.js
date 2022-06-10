import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/ModalAssets.css"

import axios from "axios";
import AddAssets from "../Assets/AddAssets";
import Button from "react-bootstrap/Button";
import {Form, Modal} from "react-bootstrap";

function Invoice(prop) {
    const [show, setShow] = useState(false);
    const [Email, setEmail] = useState("");
    const [Amount, setAmount] = useState("");
    const [Date, setDate] = useState("");
    const [Price, setPrice] = useState("");
    const [Street, setStreet] = useState("");
    const [City, setCity] = useState("");
    const [code, setcode] = useState("");
    const [description, setdescription] = useState("");
    const [name, setname] = useState("");
    const [Quantity, setQuantity] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = (event) => {
        event.preventDefault();

        let  RequestObj = {

            email: Email,
            item: {
                email: Email,
                Amount: Amount,
                Price: Price,
                Street: Street,
                City: City,
                code: code,
                description: description,
                name: name,
                Date: Date,
                Quantity:Quantity
            }
        }
        axios.post('https://oracleglmanagement.herokuapp.com/addPayments',RequestObj)
            .then(response => {
                prop.fun();
                alert("invoice for: "+name+' '+ 'successfully created!' );
            })
    }
    return (
        <>
            <div className="col-sm-12 col-xs-12">
                <a onClick={handleShow} className="btn btn-sm btn-primary pull-left"><i
                    className="fa fa-plus-circle"></i> Add New</a>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Assets Management</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container forget-password">
                        <div className="row">
                            <div className="col-md-12 col-md-offset-4">
                                <div className="panel panel-default">
                                    <div className="panel-body">
                                        <div className="text-center">
                                            <img src="https://quickbooks.intuit.com/oidam/intuit/sbseg/en_row/blog/images/07/what-is-invoice-row.png" alt="car-key" border="0"/>
                                            <p>Add InvoiceInfo.</p>
                                            <form id="register-form" role="form" autoComplete="off" className="form"
                                                  onSubmit={handleSubmit}>

                                                <p></p>
                                                <div className="form-group">
                                                    <div className="input-group">
                                                            <span className="input-group-addon"><i
                                                                className="glyphicon glyphicon-envelope color-blue"></i></span>
                                                        <input id="forgetAnswer" name="Email"
                                                               required="required"
                                                               placeholder="Email" className="form-control"
                                                               type="email"
                                                               onChange={(e) => setEmail(e.target.value)}/>
                                                    </div>
                                                </div>
                                                <p></p>
                                                <div className="form-group">
                                                    <div className="input-group">
                                                            <span className="input-group-addon"><i
                                                                className="glyphicon glyphicon-envelope color-blue"></i></span>
                                                        <input id="forgetAnswer" name="Amount"
                                                               required="required"
                                                               placeholder="Amount" className="form-control"
                                                               type="number"
                                                               onChange={(e) => setAmount(e.target.value)}/>
                                                    </div>
                                                </div>
                                                <p></p>
                                                <div className="form-group">
                                                    <div className="input-group">
                                                            <span className="input-group-addon"><i
                                                                className="glyphicon glyphicon-envelope color-blue"></i></span>
                                                        <input id="forgetAnswer" name="Street"
                                                               required="required"
                                                               placeholder="Street" className="form-control"
                                                               type="text"
                                                               onChange={(e) => setStreet(e.target.value)}/>
                                                    </div>
                                                </div>
                                                <p></p>
                                                <div className="form-group">
                                                    <div className="input-group">
                                                            <span className="input-group-addon"><i
                                                                className="glyphicon glyphicon-envelope color-blue"></i></span>
                                                        <input id="forgetAnswer" name="City"
                                                               required="required"
                                                               placeholder="City" className="form-control"
                                                               type="text"
                                                               onChange={(e) => setCity(e.target.value)}/>
                                                    </div>
                                                </div>
                                                <p></p>
                                                <div className="form-group">
                                                    <div className="input-group">
                                                            <span className="input-group-addon"><i
                                                                className="glyphicon glyphicon-envelope color-blue"></i></span>
                                                        <input id="forgetAnswer" name="code"
                                                               required="required"
                                                               placeholder="code" className="form-control"
                                                               type="text"
                                                               onChange={(e) => setcode(e.target.value)}/>
                                                    </div>
                                                </div>
                                                <p></p>
                                                <div className="form-group">
                                                    <div className="input-group">
                                                            <span className="input-group-addon"><i
                                                                className="glyphicon glyphicon-envelope color-blue"></i></span>
                                                        <input id="forgetAnswer" name="code"
                                                               required="required"
                                                               placeholder="description" className="form-control"
                                                               type="text"
                                                               onChange={(e) => setdescription(e.target.value)}/>
                                                    </div>
                                                </div>
                                                <p></p>
                                                <div className="form-group">
                                                    <div className="input-group">
                                                            <span className="input-group-addon"><i
                                                                className="glyphicon glyphicon-envelope color-blue"></i></span>
                                                        <input id="forgetAnswer" name="Name"
                                                               required="required"
                                                               placeholder="Name" className="form-control"
                                                               type="text"
                                                               onChange={(e) => setname(e.target.value)}/>
                                                    </div>
                                                </div>
                                                <p></p>
                                                <div className="form-group">
                                                    <div className="input-group">
                                                            <span className="input-group-addon"><i
                                                                className="glyphicon glyphicon-envelope color-blue"></i></span>
                                                        <input id="forgetAnswer" name="Name"
                                                               required="required"
                                                               placeholder="Date" className="form-control"
                                                               type="date"
                                                               onChange={(e) => setDate(e.target.value)}/>
                                                    </div>
                                                </div>
                                                <p></p>
                                                <div className="form-group">
                                                    <div className="input-group">
                                                            <span className="input-group-addon"><i
                                                                className="glyphicon glyphicon-envelope color-blue"></i></span>
                                                        <input id="forgetAnswer" name="Quantity"
                                                               required="required"
                                                               placeholder="Quantity" className="form-control"
                                                               type="name"
                                                               onChange={(e) => setQuantity(e.target.value)}/>
                                                    </div>
                                                </div>
                                                <p></p>
                                                <div className="form-group">
                                                    <input name="btnForget"
                                                           required="required"
                                                           className="btn btn-lg btn-primary btn-block btnForget"
                                                           value="create invoice" type="submit" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Invoice;
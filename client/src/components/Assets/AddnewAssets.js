import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/ModalAssets.css"

import axios from "axios";
import Assets from "./AddAssets";
import Button from "react-bootstrap/Button";
import {Form, Modal} from "react-bootstrap";

function ModalAssets(prop) {
    const [show, setShow] = useState(false);
    const [Name, setName] = useState("");
    const [AssetNumber, setAssetNumber] = useState("");
    const [AssetType, setAssetType] = useState("");
    const [BookValue, setBookValue] = useState("");
    const [Category, setCategory] = useState("");
    const [Description, setDescription] = useState("");
    const [units, setUnits] = useState("");
    const [Date, setDate] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(Name)
        let  RequestObj = {

            Name: Name,
            Asset: {
                Name: Name,
                AssetNumber: AssetNumber,
                AssetType: AssetType,
                BookValue: BookValue,
                Category: Category,
                Description: Description,
                units: units,
                Date: Date
            }
        }
        axios.post('https://oracleglmanagement.herokuapp.com/addAssets',RequestObj)
            .then(response => {
                prop.fun();
                alert(response.data.name + ''+ response.data.Response);
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
                                            <img src="https://thumbs.dreamstime.com/b/financial-services-asset-management-logo-illustration-gear-one-side-has-mechanical-key-other-dollar-sign-181830704.jpg" alt="car-key" border="0"/>
                                                <p>Track Organization Assets.</p>
                                                <form id="register-form" role="form" autoComplete="off" className="form"
                                                      onSubmit={handleSubmit}>

                                                    <p></p>
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <span className="input-group-addon"><i
                                                                className="glyphicon glyphicon-envelope color-blue"></i></span>
                                                            <input id="forgetAnswer" name="Name"
                                                                   required="required"
                                                                   placeholder="Assets Name" className="form-control"
                                                                   type="text"
                                                                   onChange={(e) => setName(e.target.value)}/>
                                                        </div>
                                                    </div>
                                                    <p></p>
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <span className="input-group-addon"><i
                                                                className="glyphicon glyphicon-envelope color-blue"></i></span>
                                                            <input id="AssetNumber" name="AssetNumber"
                                                                   required="required"
                                                                   placeholder="Asset Number" className="form-control"
                                                                   type="number"
                                                                   onChange={(e) => setAssetNumber(e.target.value)}/>
                                                        </div>
                                                    </div>
                                                    <p></p>
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <select className="form-control" id="sel1"
                                                                    required="required"
                                                                    onChange={(e) => setAssetType(e.target.value)}
                                                            >
                                                                <option selected="true" disabled="disabled">Please
                                                                    Select Asset Type
                                                                </option>
                                                                <option>Minor</option>
                                                                <option>Major</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <p></p>
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <span className="input-group-addon"><i
                                                                className="glyphicon glyphicon-envelope color-blue"></i></span>
                                                            <input id="Description" name="Description"
                                                                   required="required"
                                                                   placeholder="Description" className="form-control"
                                                                   type="text"
                                                                   onChange={(e) => setDescription(e.target.value)}/>
                                                        </div>
                                                    </div>
                                                    <p></p>
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <span className="input-group-addon"><i
                                                                className="glyphicon glyphicon-envelope color-blue"></i></span>
                                                            <input id="BookValue" name="BookValue"
                                                                   required="required"
                                                                   placeholder="BookValue" className="form-control"
                                                                   type="number"
                                                                   onChange={(e) => setBookValue(e.target.value)}/>
                                                        </div>
                                                    </div>
                                                    <p></p>
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <select className="form-control" id="sel1"
                                                                    required="required"
                                                                    onChange={(e) => setCategory(e.target.value)}
                                                            >
                                                                <option selected="true" disabled="disabled">Please
                                                                    Select Asset Category
                                                                </option>
                                                                <option>Software</option>
                                                                <option>Hardware</option>
                                                                <option>Furniture</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <p></p>
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <span className="input-group-addon"><i
                                                                className="glyphicon glyphicon-envelope color-blue"></i></span>
                                                            <input id="units" name="units"
                                                                   required="required"
                                                                   placeholder="units" className="form-control"
                                                                   type="number"
                                                                   onChange={(e) => setUnits(e.target.value)}/>
                                                        </div>
                                                    </div>
                                                    <p></p>
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <span className="input-group-addon"><i
                                                                className="glyphicon glyphicon-envelope color-blue"></i></span>
                                                            <input id="Date" name="Date"
                                                                   required="required"
                                                                   placeholder="Date" className="form-control"
                                                                   type="Date"
                                                                   onChange={(e) => setDate(e.target.value)}/>
                                                        </div>
                                                    </div>
                                                    <p></p>
                                                    <div className="form-group">
                                                        <input name="btnForget"
                                                               required="required"
                                                               className="btn btn-lg btn-primary btn-block btnForget"
                                                               value="Save" type="submit" />
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

export default ModalAssets;
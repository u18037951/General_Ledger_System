import { auth } from "./Auth/Authentication";
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


const Home = ({ user }) => {
    return (

        <div className="container-fluid" style={{ marginTop: "10%" }}>

            <div className="row quick-action-toolbar">
                <div className="col-md-12 grid-margin">
                    <div className="card">
                        <div className="card-header d-block d-md-flex">
                            <h5 className="mb-0">Quick Actions</h5>
                            <p className="ml-auto mb-0">How are your active users trending overtime?<i className="icon-bulb"></i></p>
                        </div>
                        <div className="d-md-flex row m-0 quick-action-btns" role="group" aria-label="Quick action buttons">
                            <div className="col-sm-6 col-md-3 p-3 text-center btn-wrapper">
                                <button type="button" className="btn px-0"> <i className="icon-user mr-2"></i> Add Client</button>
                            </div>
                            <div className="col-sm-6 col-md-3 p-3 text-center btn-wrapper">
                                <button type="button" className="btn px-0"><i className="icon-docs mr-2"></i> Create Quote</button>
                            </div>
                            <div className="col-sm-6 col-md-3 p-3 text-center btn-wrapper">
                                <button type="button" className="btn px-0"><i className="icon-folder mr-2"></i> Enter Payment</button>
                            </div>
                            <div className="col-sm-6 col-md-3 p-3 text-center btn-wrapper">
                                <button type="button" className="btn px-0"><i className="icon-book-open mr-2"></i>Create Invoice</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <Card.Body>
                    <Card.Title>Welcome</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        {user.displayName}
                    </Card.Subtitle>
                    <img src={user.photoURL} alt="" />
                    <Button
                        style={{margin: '5%'}}
                        variant="outline-danger"
                        type="submit"
                        onClick={() => auth.signOut()}
                    >
                        Sign Out
                    </Button>
                </Card.Body>
            </div>
        </div>
    );
};

export default Home;
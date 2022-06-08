import {
    signInWithGoogle,
    signInWithEmailAndPassword,
    registerWithEmailAndPassword
} from "./Auth/Authentication";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import React, { useState } from "react";
import '../css/SignIn.css';

const SignIn = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    return (
        <div
         >
            <div className="container-fluid">
                <div className="row no-gutter">

                    <div className="col-md-6 d-none d-md-flex bg-image"></div>

                    <div className="col-md-6" >
                        <div className="login d-flex align-items-center py-5">


                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-10 col-xl-7 mx-auto">



                                        <div className="col-lg-12 login-title">
                                            OracleEBS Admin Portal
                                        </div>
                                        <p className="text-muted mb-4"></p>
                                        <div className="col col-12">
                                            <Card>
                                                <Card.Body>
                                                    <Card.Title></Card.Title>
                                                    <div>
                                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                            <Form.Label className="label">Email address</Form.Label>
                                                            <Form.Control
                                                                type="email"
                                                                placeholder="Enter email"
                                                                value={loginEmail}
                                                                onChange={(e) => setLoginEmail(e.target.value)}
                                                            />
                                                            <Form.Text className="text-muted">

                                                            </Form.Text>
                                                        </Form.Group>

                                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                                            <Form.Label className="label">Password</Form.Label>
                                                            <Form.Control
                                                                type="password"
                                                                placeholder="Password"
                                                                value={loginPassword}
                                                                onChange={(e) => setLoginPassword(e.target.value)}
                                                            />
                                                        </Form.Group>
                                                        <hr style={{ margin: "5%" }} />

                                                        <div className="d-grid gap-2">
                                                            <Button
                                                                variant="outline-success"
                                                                type="submit"
                                                                onClick={() => {
                                                                    signInWithEmailAndPassword(loginEmail, loginPassword);
                                                                }}
                                                            >
                                                                Login
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>


                </div>
            </div>
        </div>


    );
};

export default SignIn;
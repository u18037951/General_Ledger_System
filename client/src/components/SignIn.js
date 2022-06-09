import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useAuth } from "./Auth/Authentication"
import React, { useState } from "react";
import '../css/SignIn.css';
import { useNavigate } from 'react-router-dom';
const SignIn = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const { login, currentUser } = useAuth()
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    async function handleSubmit(x,y) {
        try {
            setError("")
            setLoading(true)
            await login(x, y)
            navigate('/home');
            localStorage.setItem('emailSession',x);
        } catch(err)
        {
            setError("Failed to login!")
        }

        setLoading(false)
    }
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
                                                                    handleSubmit(loginEmail, loginPassword);
                                                                }}
                                                            >
                                                                Login
                                                            </Button>
                                                            <p></p>
                                                            <Button bsStyle="danger">Reset Password</Button>
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
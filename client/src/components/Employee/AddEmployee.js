import Button from "react-bootstrap/Button";
import {Col, Form, InputGroup, Modal} from "react-bootstrap";
import {render} from "react-dom";
import {
    signInWithGoogle,
    signInWithEmailAndPassword,
    registerWithEmailAndPassword
} from "../Auth/Authentication";
import {useState} from "react";
import * as PropTypes from "prop-types";
import axios from "axios";

function TextField(props) {
    return null;
}

TextField.propTypes = {
    onChange: PropTypes.func,
    label: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool
};

function AddButton() {
    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const [Title, setTitle] = useState("");
    const [email, setEmail] = useState("");
    const [PersonType, setPersonType] = useState("");
    const [SocialSecurityNumber, setSocialSecurityNumber] = useState("");
    const [Age, setAge] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = (event) => {
        event.preventDefault();
        let  RequestObj = {

            email: email,
            info: {
                FullName: name,
                Title: Title,
                BirthDate: Age,
                Country: "South Africa",
                Age: 21,
                PersonType: PersonType,
                SocialSecurityNumber: SocialSecurityNumber
            }
        }
            axios.post('http://localhost:3443/addEmployee',RequestObj)
            .then(response => {
                registerWithEmailAndPassword(name,email, response.data.Employee_ID).then(r =>
                    {

                            alert(` ${response.data.message} `)


                    }
                ).catch(err=>{
                    alert(`unable to register ${name}`)
                });
               //  window.location.reload();

            }).catch(err=>{
                alert(`Error has occurred adding Client`)
        })

    }
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                ADD
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Oracle HRM</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                       <div className="container">
                           <div className=" text-center mt-5 ">

                               <h1>Add New Employee</h1>


                           </div>


                           <div className="row ">
                               <div className="col-lg-12 mx-auto">
                                   <div className="card mt-2 mx-auto p-4 bg-light">
                                       <div className="card-body bg-light">

                                           <div className="container">
                                               <form id="contact-form" role="form"  onSubmit={handleSubmit}>


                                                   <div className="controls">

                                                       <div className="row">
                                                           <div className="col-md-12">
                                                               <div className="form-group">
                                                                   <label htmlFor="form_lastname">FullName *</label>
                                                                   <input id="form_lastname" type="text" name="surname"
                                                                          className="form-control"
                                                                          placeholder="Please enter your FullName *"
                                                                          required="required"
                                                                          data-error="Lastname is required."
                                                                          value={name}
                                                                          onChange={(e) => setName(e.target.value)}/>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div className="row">
                                                           <div className="col-md-6">
                                                               <div className="form-group">
                                                                   <label htmlFor="form_email">Email *</label>
                                                                   <input id="form_email" type="email" name="email"
                                                                          className="form-control"
                                                                          placeholder="Please enter your email *"
                                                                          required="required"
                                                                          data-error="Valid email is required."
                                                                          value={email}
                                                                          onChange={(e) => setEmail(e.target.value)}/>

                                                               </div>
                                                           </div>
                                                           <div className="col-md-6">
                                                               <div className="form-group">
                                                                   <label htmlFor="form_need">PersonType</label>
                                                                   <select id="form_need" name="need"
                                                                           className="form-control" required="required"
                                                                           data-error="Please enter Role."
                                                                           value={PersonType}
                                                                           onChange={(e) => setPersonType(e.target.value)}>
                                                                       <option value="" selected disabled>--Select Role--
                                                                       </option>
                                                                       <option>Employee</option>
                                                                       <option>Buyer</option>
                                                                       <option>Consultant</option>
                                                                   </select>

                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div className="row">
                                                           <div className="col-md-12">
                                                               <div className="form-group">
                                                                   <label htmlFor="form_message">Title *</label>
                                                                   <select id="form_need" name="need"
                                                                           className="form-control" required="required"
                                                                           data-error="Please enter Title."
                                                                           value={Title}
                                                                           onChange={(e) => setTitle(e.target.value)}>
                                                                       <option value="" selected disabled>--Select Title--
                                                                       </option>
                                                                       <option>Mr</option>
                                                                       <option>Mrs</option>
                                                                       <option>Dr</option>
                                                                       <option>Hon</option>
                                                                       <option>Ms</option>
                                                                   </select>
                                                               </div>

                                                           </div>
                                                           <div className="col-md-6">
                                                               <div className="form-group">
                                                                   <label htmlFor="form_email">Date Of Birth *</label>
                                                                   <input id="form_email" type="date" name="email"
                                                                          className="form-control"
                                                                          placeholder="Please enter your Age *"
                                                                          required="required"
                                                                          data-error="Valid Age is required."
                                                                          value={Age}
                                                                          onChange={(e) => setAge(e.target.value)}/>

                                                               </div>
                                                           </div>
                                                           <div className="col-md-6">
                                                               <div className="form-group">
                                                                   <label htmlFor="form_email">SocialSecurity Number *</label>
                                                                   <input id="form_email" type="number" name="email"
                                                                          className="form-control"
                                                                          placeholder="Please enter your ID *"
                                                                          required="required"
                                                                          data-error="Valid ID is required."
                                                                          value={SocialSecurityNumber}
                                                                          onChange={(e) => setSocialSecurityNumber(e.target.value)}/>

                                                               </div>
                                                           </div>

                                                           <div className="col-md-12">

                                                               <input type="submit" className="btn btn-success btn-send  pt-2 btn-block
                            " value="Save"/>

                                                           </div>

                                                       </div>


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
                    <Button variant="primary" onClick={handleClose}>Done</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddButton;

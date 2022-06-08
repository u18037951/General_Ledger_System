import React from "react";
import "../css/Employees.css"
import '../../css/SignIn.css';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import AddEmployee from "./AddEmployee";
class Employees extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            display: []
        }
        this.state = {
            object: {}
        }
        this.handleDelete = this.handleDelete.bind(this);

    }

    componentDidMount(){
        this.state = {
            display: [        <div className="row">
                <div className="col-lg-12">
                    <div className="section-title text-center">
                        <div className="login-title">
                            <h2>Company Clients</h2>
                        </div>
                    </div>
                </div>

            </div>
            ]
        }

        axios.post('http://localhost:3443/getEmployee',{})
            .then(response => {
                this.setState({ object : response.data })
                const employees= this.state.object;
                const myclients = [];
                let i=0;
                for (const [key, value] of Object.entries(employees)) {
                    i++;
                    for (const [item, data] of Object.entries(value)) {
                        for (const [item2, data2] of Object.entries(data)) {
                            myclients.push(
                                <tr className="inner-box">
                                    <th scope="row">
                                        <div className="event-date">
                                            <p>{data2.Employee_ID}</p>
                                        </div>
                                    </th>
                                    <td>
                                        <div className="event-img">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                 alt=""/>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="event-wrap">
                                            <h3><a href="#">{data2.FullName}</a></h3>
                                            <div className="meta">
                                                <div className="organizers">
                                                    <a href="#">{data2.Title}</a>
                                                </div>
                                                <div className="categories">
                                                    <a href="#">Age: {data2.Age}</a>
                                                </div>
                                                <div className="time">
                                                    <span>Social security: {data2.SocialSecurityNumber}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="r-no">
                                            <span>{data2.PersonType}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="primary-btn">
                                            <a className="btn btn-primary" href="#">AssignPosition</a>
                                            <p></p>

                                            <button  onClick={() =>this.handleDelete(item2,data2.PersonType)} type="button" className="btn btn-outline-warning"><i className="fas fa-trash-alt"></i>Delete</button>
                                        </div>
                                    </td>
                                </tr>

                            )
                        }


                    }
                    if(i === Object.keys(employees).length){
                        this.setState({ display : myclients })
                    }
                }
            }).catch(err=>{
        })




    }
    handleDelete = (x,y)=> {

        let  RequestObj = {
            email: x,
            PersonType: y
        }
        axios.post('http://localhost:3443/removeEmployee', RequestObj )
            .then(() => {
                axios.post('http://localhost:3443/getEmployee',{})
                    .then(response => {
                        this.setState({ object : response.data })
                        const myEmployees= this.state.object;
                        const myclients = [];
                        let index=0;
                        for (const [key, value] of Object.entries(myEmployees)) {
                            index++;
                            for (const [item, data] of Object.entries(value)) {
                                for (const [item2, data2] of Object.entries(data)) {
                                    myclients.push(
                                        <tr className="inner-box">
                                            <th scope="row">
                                                <div className="event-date">
                                                    <p>{data2.Employee_ID}</p>
                                                </div>
                                            </th>
                                            <td>
                                                <div className="event-img">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                         alt=""/>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="event-wrap">
                                                    <h3><a href="#">{data2.FullName}</a></h3>
                                                    <div className="meta">
                                                        <div className="organizers">
                                                            <a href="#">{data2.Title}</a>
                                                        </div>
                                                        <div className="categories">
                                                            <a href="#">Age: {data2.Age}</a>
                                                        </div>
                                                        <div className="time">
                                                            <span>Social security: {data2.SocialSecurityNumber}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="r-no">
                                                    <span>{data2.PersonType}</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="primary-btn">
                                                    <a className="btn btn-primary" href="#">AssignPosition</a>
                                                    <p></p>
                                                    <button  onClick={() =>this.handleDelete(item2,data2.PersonType)} type="button" className="btn btn-outline-warning"><i className="fas fa-trash-alt"></i>Delete</button>
                                                </div>
                                            </td>
                                        </tr>

                                    )
                                }


                            }
                            if(index === Object.keys(myEmployees).length){

                                this.setState({ display : myclients })
                            }
                        }
                    }).catch(err=>{
                    })
            })



    }

    render() {
        return (


            <div className="event-schedule-area-two bg-color pad100">

                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <div className="login-title">
                                <h2>Company Clients</h2>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade active show" id="home" role="tabpanel">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th className="text-center"  scope="col">ID</th>
                                            <th  className="text-warning" scope="col" >Profile</th>
                                            <th className="text-warning"scope="col">Position</th>
                                            <th className="text-warning" scope="col">PersonType</th>
                                            <th className="text-center text-success" scope="col">
                                                <AddEmployee/>

                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {this.state.display}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

        );
    }
};

export default Employees;
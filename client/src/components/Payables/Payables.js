import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/payables.css"
import axios from "axios";
import ModalAssets from "../Assets/AddnewAssets";
import InvoiceModal from "./InvoiceModal";
class Payables extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            display: []
        }
        this.state = {
            object: {}
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleView = this.handleView.bind(this);
        this.handleGenerate = this.handleGenerate.bind(this);
    }
    handleGenerate = (x)=> {
         alert('generating invoice!')
    }
    handleDelete = (x)=> {
        let reqObj = {
            Name: x
        }

        axios.post('https://oracleglmanagement.herokuapp.com/deleteAssets',reqObj)
            .then(response => {
                this.handleView();
                alert(x + ' Asset Has been successfully deleted!')
            })
    }
    handleView = ()=> {
        let req = {
            collection: "Payment"
        }
        axios.post('https://oracleglmanagement.herokuapp.com/getAll',req)
            .then(response => {
                console.log(response.data)
                let assets = [];
                let i=0;
                for (const [key, Value] of Object.entries(response.data)) {
                    i++;
                    assets.push(
                        <tr>
                            <td>{Value.email}</td>
                            <td>R{Value.Amount}</td>
                            <td>{Value.Date}</td>
                            <td>{Value.Street + ' ' + Value.City}</td>
                            <td>{Value.code}</td>
                            <td>{Value.description}</td>
                            <td>{Value.name}</td>

                            <td>{Value.quantity}</td>
                            <td>
                                <ul className="action-list">
                                    <li><a  onClick={() =>this.handleGenerate(Value.email)} className="btn btn-danger"><i
                                        className="fa fa-university"></i></a></li>
                                </ul>
                            </td>
                        </tr>

                    )
                    if(i === Object.keys(response.data).length){
                        this.setState({ display : assets })
                    }
                }
            })
    }
    componentDidMount(){

        this.handleView();
    }
    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-offset-1 col-md-10">
                    <div className="panel">
                        <div className="panel-heading">
                            <div className="row">
                                <InvoiceModal fun = {this.handleView}/>
                            </div>
                        </div>
                        <div className="panel-body table-responsive">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th>Email</th>
                                    <th>Amount</th>
                                    <th>Date</th>
                                    <th>Address</th>
                                    <th>Code</th>
                                    <th>Description</th>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Generate Invoice</th>
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
    }
}
export default Payables;
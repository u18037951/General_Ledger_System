import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/invoice.css"
import axios from "axios";
class InvoiceInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            display: []
        }
        this.state = {
            object: {}
        }
    }
    componentDidMount(){
    }
    render() {
        return <div className="page-content container">
             <div className="page-header text-blue-d2">
                <h1 className="page-title text-secondary-d1">
                    Invoice
                    <small className="page-info">
                        <i className="fa fa-angle-double-right text-80"></i>
                        Email: {this.props.email}
                    </small>
                </h1>

            </div>

            <div className="container px-0">
                <div className="row mt-4">
                    <div className="col-12 col-lg-12">
                        <div className="row">
                            <div className="col-12">
                                <div className="text-center text-150">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/94/Logo_oracle.jpg" alt="car-key" border="0"/>
                                </div>
                            </div>
                        </div>


                        <hr className="row brc-default-l1 mx-n1 mb-4"/>

                        <div className="row">
                            <div className="col-sm-6">
                                <div>
                                    <span className="text-sm text-grey-m2 align-middle">To:</span>
                                    <span className="text-600 text-110 text-blue align-middle"> {this.props.name}</span>
                                </div>
                                <div className="text-grey-m2">
                                    <div className="my-1">
                                        {this.props.Street}, {this.props.City}
                                    </div>
                                    <div className="my-1">
                                        {this.props.City}, South Africa
                                    </div>
                                    <div className="my-1"><i
                                        className="fa fa-phone fa-flip-horizontal text-secondary"></i> <b
                                        className="text-600">{this.props.code}</b></div>
                                </div>
                            </div>


                            <div className="text-95 col-sm-6 align-self-start d-sm-flex justify-content-end">
                                <hr className="d-sm-none"/>
                                <div className="text-grey-m2">
                                    <div className="mt-1 mb-2 text-secondary-m1 text-600 text-125">
                                        Invoice
                                    </div>

                                    <div className="my-2"><i className="fa fa-circle text-blue-m2 text-xs mr-1"></i>
                                        <span className="text-600 text-90">Code:</span> {this.props.code}
                                    </div>

                                    <div className="my-2"><i className="fa fa-circle text-blue-m2 text-xs mr-1"></i>
                                        <span className="text-600 text-90">Issue Date:</span>{this.props.Date}
                                    </div>

                                    <div className="my-2"><i className="fa fa-circle text-blue-m2 text-xs mr-1"></i>
                                        <span className="text-600 text-90">Status:</span> <span
                                            className="badge badge-warning badge-pill px-25">Unavailable</span></div>
                                </div>
                            </div>

                        </div>

                        <div className="mt-4">
                            <div className="row text-600 text-white bgc-default-tp1 py-25">
                                <div className="d-none d-sm-block col-1">#</div>
                                <div className="col-9 col-sm-5">Description</div>
                                <div className="d-none d-sm-block col-4 col-sm-2">Qty</div>
                                <div className="d-none d-sm-block col-sm-2">Unit Price</div>
                                <div className="col-2">Amount</div>
                            </div>

                            <div className="text-95 text-secondary-d3">
                                <div className="row mb-2 mb-sm-0 py-25">
                                    <div className="d-none d-sm-block col-1">1</div>
                                    <div className="col-9 col-sm-5">{this.props.description}</div>
                                    <div className="d-none d-sm-block col-2">{this.props.Quantity}</div>
                                    <div className="d-none d-sm-block col-2 text-95">R {this.props.Amount}</div>
                                    <div className="col-2 text-secondary-d2">R {this.props.Amount * this.props.Quantity}</div>
                                </div>

                            </div>

                            <div className="row border-b-2 brc-default-l2"></div>

                            <div className="row mt-3">
                                <div className="col-12 col-sm-5 text-grey text-90 order-first order-sm-last">
                                    <div className="row my-2">
                                        <div className="col-7 text-right">
                                            SubTotal
                                        </div>
                                        <div className="col-5">
                                            <span className="text-120 text-secondary-d1">{this.props.Amount * this.props.Quantity}</span>
                                        </div>
                                    </div>

                                    <div className="row my-2">
                                        <div className="col-7 text-right">
                                            Tax (10%)
                                        </div>
                                        <div className="col-5">
                                            <span className="text-110 text-secondary-d1">{(this.props.Amount * this.props.Quantity)*10/100}</span>
                                        </div>
                                    </div>

                                    <div className="row my-2 align-items-center bgc-primary-l3 p-2">
                                        <div className="col-7 text-right">
                                            Total Amount
                                        </div>
                                        <div className="col-5">
                                            <span className="text-150 text-success-d3 opacity-2">{(this.props.Amount * this.props.Quantity) - (this.props.Amount * this.props.Quantity)*10/100}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr/>

                            <div>
                                <span className="text-secondary-d1 text-105">Enjoy More Services With Us!</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default InvoiceInfo;
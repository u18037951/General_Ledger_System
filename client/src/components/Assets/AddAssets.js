import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/assets.css"
import Depreciation from "./Depreciation";
import axios from "axios";
import ModalAssets from "./AddnewAssets";

class Assets extends React.Component {
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
        axios.post('https://oracleglmanagement.herokuapp.com/getAssets',{})
            .then(response => {
                let assets = [];
                let i=0;
                for (const [key, Value] of Object.entries(response.data)) {
                    i++;
                    assets.push(
                        <tr>
                            <td>
                                <ul className="action-list">
                                    <li><a  onClick={() =>this.handleDelete(Value.Name)} className="btn btn-danger"><i
                                        className="fa fa-times"></i></a></li>
                                </ul>
                            </td>

                            <td>{Value.Name}</td>
                            <td>{Value.AssetNumber}</td>
                            <td>{Value.AssetType}</td>
                            <td>R{Value.BookValue}</td>
                            <td>{Value.Date}</td>
                            <td>{Value.Description}</td>
                            <td>{Value.units}</td>
                            <td>
                                 <Depreciation price={Value.BookValue} prop2={Value.Date}/>
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
                                  <ModalAssets fun = {this.handleView}/>
                            </div>
                        </div>
                        <div className="panel-body table-responsive">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th>Delete</th>
                                    <th>Name</th>
                                    <th>Asset#</th>
                                    <th>Type</th>
                                    <th>Bookvalue</th>
                                    <th>date</th>
                                    <th>Description</th>
                                    <th>Units</th>
                                    <th>View</th>
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
        </div>;
    }
}
export default Assets;
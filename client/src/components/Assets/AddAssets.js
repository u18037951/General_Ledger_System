import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/assets.css"
class Assets extends React.Component {
    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-offset-1 col-md-10">
                    <div className="panel">
                        <div className="panel-heading">
                            <div className="row">
                                <div className="col-sm-12 col-xs-12">
                                    <a href="#" className="btn btn-sm btn-primary pull-left"><i
                                        className="fa fa-plus-circle"></i> Add New</a>
                                </div>
                            </div>
                        </div>
                        <div className="panel-body table-responsive">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Asset#</th>
                                    <th>Type</th>
                                    <th>Bookvalue</th>
                                    <th>date</th>
                                    <th>Description</th>
                                    <th>Units</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        <ul className="action-list">
                                            <li><a href="#" className="btn btn-primary"><i
                                                className="fa fa-pencil-alt"></i></a></li>
                                            <li><a href="#" className="btn btn-danger"><i
                                                className="fa fa-times"></i></a></li>
                                        </ul>
                                    </td>
                                    <td>1</td>
                                    <td>Vincent Williamson</td>
                                    <td>31</td>
                                    <td>31</td>
                                    <td>31</td>
                                    <td><a href="#" className="btn btn-sm btn-success"><i className="fa fa-search"></i></a>
                                    </td>

                                </tr>
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
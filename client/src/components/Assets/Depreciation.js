import Button from "react-bootstrap/Button";
import {Form, Modal} from "react-bootstrap";
import {useEffect, useState} from "react";

function Depreciation(price) {
    const [show, setShow] = useState(false);
    const [display, setDisplay] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () =>{
        setShow(true);

        let arrayElements= [];
        let date= price.prop2.substring(0, 4);
        let myDate = parseInt(date);
        let amount = price.price;
        let DepreciationPY=(amount-1300)/10;
        let Percent = (amount/DepreciationPY);
        Percent = Percent.toFixed(2);
        let accumulation =0;
        let bookValue = price.price;
        let ending=0;
        for(let i=1;i<11;i++){
            accumulation=bookValue*Percent/100;
            accumulation = accumulation.toFixed(2);
            ending = bookValue - DepreciationPY;
            ending = ending.toFixed(2);
            arrayElements.push(
                <tr>
                    <th>
                        <label className="customcheckbox">
                            <span className="checkmark"></span>
                        </label>
                    </th>
                    <td>{myDate+i}</td>
                    <td>R{bookValue}</td>
                    <td>{Percent}%</td>
                    <td>- R{DepreciationPY}</td>
                    <td>R{accumulation}</td>
                    <td>R{ending}</td>
                </tr>
            )
            bookValue = bookValue - DepreciationPY;
            bookValue = bookValue.toFixed(2);




        }

        setDisplay(arrayElements);
    }






    return (
        <>
            <a onClick={handleShow} className="btn btn-sm btn-success">
                <i className="fa fa-search"></i>

            </a>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <div className="container">


                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <h5 className="card-title m-b-0">Depreciation over the next 10 years(Straight Line)</h5>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead className="thead-light">
                                            <tr>
                                                <th>
                                                    <label className="customcheckbox m-b-20">
                                                    </label>
                                                </th>
                                                <th scope="col">Year</th>
                                                <th scope="col">Beginning Book Value</th>
                                                <th scope="col">Percentage Change</th>
                                                <th scope="col">Depreciation Amount</th>
                                                <th scope="col">Accumulated Depreciation Amount</th>
                                                <th scope="col">Ending Book Value</th>
                                            </tr>
                                            </thead>
                                            <tbody className="customtable">

                                              { display }
                                            </tbody>
                                        </table>
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
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Depreciation;
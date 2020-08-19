import React, { Component } from "react";

class NavServices extends Component {

    getService(e){
        console.log(e.target.value);
        this.props.setType(e.target.value);
    }

    render() {
        return (
            <div>
                
                <div className="container-fluid menu mobile">
                    <div className="row">
                        
                        <div className="col-md-12">
                            <span>Categori menu</span>
                            <i className="fa fa-times" id="close_menu" />
                            <ul>
                                <li>

                                    <button onClick={()=>{this.props.setType('cafe');}}  className="btn btn-link p-3" value="cafe">
                                    <i className="fa fa-coffee"></i>
                                    </button>


                                </li>
                                <li>
                                    <button onClick={()=>{this.props.setType('restaurant');}}  className="btn btn-link p-3" value="restaurant">
                                    <i className="fa fa-cutlery"></i>
                                    </button>

                                </li>
                                <li>
                                    <button onClick={()=>{this.props.setType('mosque');}}  className="btn btn-link p-3" >
                                    <i className="fas fa-mosque"></i>
                                    </button>

                                </li>
                                <li>
                                    <button onClick={()=>{this.props.setType('bank');}}  className="btn btn-link p-3" >
                                    <i className="fas fa-bank"></i>
                                    </button>
                                </li>
                                <li>
                                    <button onClick={()=>{this.props.setType('supermarket');}}  className="btn btn-link p-3" >
                                    <i className="fa fa-shopping-cart" />
                                    </button>
                                </li>
                                <li>
                                    <button onClick={()=>{this.props.setType('pharmacy');}}  className="btn btn-link p-3" >
                                    <i className="fas fa-notes-medical"></i>
                                    </button>
                                </li>

                                <li>
                                    <button onClick={()=>{this.props.setType('store');}}  className="btn btn-link p-3" >
                                    <i className="fas fa-store-alt"></i>
                                    </button>
                                </li>

                                <li>
                                    <button onClick={()=>{this.props.setType('doctor');}}  className="btn btn-link p-3" >
                                    <i className="fas fa-stethoscope"></i>
                                    </button>
                                </li>

                                <li>
                                    <button onClick={()=>{this.props.setType('gym');}}  className="btn btn-link p-3" >
                                    <i className="fas fa-dumbbell"></i>
                                    </button>
                                </li>

                                <li>
                                    <button onClick={()=>{this.props.setType('parking');}}  className="btn btn-link p-3" >
                                    <i className="fas fa-parking"></i>
                                    </button>
                                </li>


                                <li className="mobile_menu">
                                    <a href="#">
                                        <i className="fa fa-bars" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavServices;

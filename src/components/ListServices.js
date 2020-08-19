import React, { Component } from 'react';

class ListServices extends Component {

    getService = (e) => {
        console.log(e.target.value);
        this.props.setType(e.target.value);
        e.target.style.color = '#fff';
    }

    render() {
        return (
            <div className="col-md-3 mobile_none sidebar">
                <div className="affix-top" id="myAffix">
                    
                    <ul className='places_cat'>
                        <li>
                            <button onClick={this.getService.bind(this)} className="btn btn-link" value="cafe">
                                <i className="fa fa-coffee"></i>Cafe
                            </button>
                        </li>
                        <li>
                            <button onClick={this.getService.bind(this)} className="btn btn-link" value="restaurant">
                                <i className="fa fa-cutlery"></i>Restaurant
                            </button>
                        </li>
                        <li>
                            <button onClick={this.getService.bind(this)} className="btn btn-link" value="mosque">
                                <i className="fas fa-mosque"></i>Mosque
                            </button>
                        </li>
                        <li>
                            <button onClick={this.getService.bind(this)} className="btn btn-link" value="bank">
                                <i className="fas fa-bank"></i>Bank
                            </button>
                        </li>
                        <li>
                            <button onClick={this.getService.bind(this)} className="btn btn-link" value="supermarket">
                                <i className="fa fa-shopping-cart" />Supermarket
                            </button>
                        </li>
                        <li>
                            <button onClick={this.getService.bind(this)} className="btn btn-link" value="pharmacy">
                                <i className="fas fa-notes-medical"></i>Pharmacy
                            </button>
                        </li>
                        <li>
                            <button onClick={this.getService.bind(this)} className="btn btn-link" value="store">
                                <i className="fas fa-store-alt"></i>Store
                            </button>
                        </li>
                        <li>
                            <button onClick={this.getService.bind(this)} className="btn btn-link" value="doctor">
                                <i className="fas fa-stethoscope"></i>Doctor
                            </button>
                        </li>
                        <li>
                            <button onClick={this.getService.bind(this)} className="btn btn-link" value="gym">
                                <i className="fas fa-dumbbell"></i>Gym
                            </button>
                        </li>
                        <li>
                            <button onClick={this.getService.bind(this)} className="btn btn-link" value="parking">
                                <i className="fas fa-parking"></i>Parking
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ListServices;

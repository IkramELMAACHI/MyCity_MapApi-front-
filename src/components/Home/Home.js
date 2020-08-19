
import LoginForm from "./LoginForm";
import Profile from '../Layouts/Profile'
import Header from './Header'
import Main from './Main'
import Nav from '../Layouts/Nav';

import 'bootstrap';
import React, { useState, useContext, Profiler } from "react";

import { Redirect } from "react-router-dom";

export default function Home() {

    if (localStorage.usertoken !== '') {

        var GetStart = (
            <div className="btns">
                <button className=" green btn-success" id='start' >     Get started
                    </button>
            </div>
        )

    } else {
        var GetStart = (<span>  you have to be a member to get access  </span>)


        // }
    }




    // const { username, password, isChecked } = this.state;

    return (
        <>

            <div className="promo">
                <div className="start_descrition option animated fadeInDownBig">

                    <h1>
                        welcome to my city guide!
                     <span />
                    </h1>
                    <div style={{ width: '66%', margin: ' 0 auto' }}>
                        <span >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            when an unknown printer galley of type and scrambled it to make a
                            type specimen book.
                        </span>

                        <p> {GetStart}     </p>
                    </div>


                </div>
                <div className="animation">
                    <img
                        src="img/start/01.png"
                        className="option animated fadeInDownBig one_element"
                        alt="#"
                    />
                    <img
                        src="img/start/02.png"
                        className="option animated fadeInDownBig two_element"
                        alt="#"
                    />
                    <img
                        src="img/start/03.png"
                        className="option animated fadeInDownBig three_element"
                        alt="#"
                    />
                    <img
                        src="img/start/04.png"
                        className="option animated fadeInDownBig four_element"
                        alt="#"
                    />
                    <img
                        src="img/start/05.png"
                        className="option animated fadeInDownBig five_element"
                        alt="#"
                    />
                    <img
                        src="img/start/06.png"
                        className="option animated fadeInDownBig six_element"
                        alt="#"
                    />
                    <img
                        src="img/start/07.png"
                        className="option animated fadeInRightBig seven_element"
                        alt="#"
                    />
                    <img
                        src="img/start/08.png"
                        className="option animated fadeInLeftBig eight_element"
                        alt="#"
                    />
                    <img
                        src="img/start/09.png"
                        className="option animated fadeInDownBig nine_element"
                        alt="#"
                    />
                    <img
                        src="img/start/10.png"
                        className="option animated fadeInUpBig ten_element"
                        alt="#"
                    />
                    <img
                        src="img/start/11.png"
                        className="option animated fadeInUpBig quote_element"
                        alt="#"
                    />
                    <img
                        src="img/start/12.png"
                        className="option animated fadeInUpBig quote_two_element"
                        alt="#"
                    />
                </div>
                <div className="bgg" />
            </div>

        </>

    )

}



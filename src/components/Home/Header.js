
import React, { useState, useContext } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import axios from 'axios';
import { Link, Redirect } from "react-router-dom";
import EditAvatar from "../Layouts/EditAvatar";
import { AvatarContext } from "../../App";

export default function Header() {

  const {  openModel , setOpen} = useContext(AvatarContext );
  console.log(localStorage.usertoken);

  const style = {
    marginLeft: '117px',
    cursor: 'pointer'
  }

  if (localStorage.usertoken !== "") {
  
    var Connexion = (

       <a href="#" className="out_btn">
     LogOut
     </a>
    )

  } else {
    var Connexion = (
      <>
        <a href="#" className="reg_btn">
          SingUp
        </a>
        {/* jquery */}
        <a href="#" className="log_btn">
          Log in
        </a>
      </>

    )
  }
  return (
    <>
      <LoginForm />
      <RegisterForm />
 
        <EditAvatar />    

      <div className="container header">
        <div className="row">
          <div className="col-md-12">
            <div className="header_promo">

              <img id='logo' src="img/start/logo.png" style={style} alt="#" />

              {Connexion}

            </div>
          </div>
        </div>
      </div>
    </>

  )
}





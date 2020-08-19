import React, { useState, useContext, Profiler } from "react";
import axios from 'axios';

import { Redirect } from "react-router-dom";

export default function RegisterForm() {
  
    const [data, setData] = useState({})

    const handelChange =   (e) => { 
      setData( {...data, [e.target.id] :   e.target.value  })
      console.log(data);
    }
     const DataProfile = {
       'nom'  : data.nom,
        'prenom' :data.prenom ,
        'email' : data.email,
        'password' :data.password,
        'c_password' : data.c_password, 
      
 
    }
    const SubRegister = async(e) => {

        e.preventDefault();
        console.log(data);
    
    await    axios.post(`http://localhost:8000/api/register`, DataProfile )
            .then(function (response) {
                console.log(response.data);
                const resulta = response.data.success
                localStorage.setItem("usertoken", resulta.token)
                console.log(localStorage.usertoken);
                window.location.reload(true)
            }).catch((error) => {
                if (error.response) {
                    let result = error.response.data.error
                    console.log(result);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                  
                }
            });
    }
 
  
 const style = {
  padding: '10px 80px',
  margin: '13px 45px '
 }

 
      return (
        <div className="add_place none" id="R-autorized">
        <div className="place_form login_form">
          <i className="fa fa-times close_window" id="R-closeau" />
          <h3 className = 'm-0'>
          Create an Account
            <span />
          </h3>
          <form  onSubmit={(e) => SubRegister(e)}>
            <label>
              Nom :
              <input type="text" id ='nom' 
               onChange={handelChange}  
               />
            </label>
            <label>
              Prenom :
              <input type="text" id ='prenom' 
               onChange={handelChange}  
               />
            </label>
            <label>
              Email :
            <input type="text" id ='email' 
              onChange={handelChange}            
              />
            </label>
            <label>
              Password:
              <input type="password" id ='password' 
              onChange={handelChange}  
              />
            </label>
            <label>
             Confirme Password:
              <input type="password" id ='c_password' 
              onChange={handelChange}  

                 />
            </label> 
            <button   type = 'submit' className=" btn btn-primary" style = {style} > SignUp </button>
        
          </form>
        </div>
      </div>
    
       )
     }


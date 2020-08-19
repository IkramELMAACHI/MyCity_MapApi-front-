import React, { useState, useContext, Profiler } from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import { Spinner } from "react-bootstrap";


export default function LoginForm(props) {
  let history = useHistory();

  const [data, setData] = useState({})
  const [LoadButton, setLoadButton] = useState(false)
  const handelChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value })
    console.log(data);
  }
  const DataProfile = {

    'email': data.email,
    'password': data.password,
  }

  const SubLogin = async (e) => {
    e.preventDefault();
    setLoadButton(true)
    await axios.post(`http://localhost:8000/api/login`, DataProfile)
      .then(function (response) {
        console.log(response.data);
        const resulta = response.data.success
        localStorage.setItem("usertoken", resulta.token)
        console.log(localStorage.usertoken);
        window.location.reload(true)
        setLoadButton(false)
      }).catch((error) => {
        if (error.response) {
          let result = error.response.data.error
          console.log(result);
          console.log(error.response.status);
          console.log(error.response.headers);
          // setError(result)
        }
      });
  }

  const StyleBtn = {
    display: ' flex',
    flexDirection: 'column',
    margin: '40px 25px ',

  }


  return (
    <div className="add_place none" id="autorized">
      <div className="place_form login_form">
        <i className="fa fa-times close_window" id="closeau" />
        <h3>
          Sign in
        <span />
        </h3>
        <form onSubmit={(e) => SubLogin(e)}>
          <label>
            Email :
          <input type="text" id='email'
              onChange={handelChange}
              style={{ margin: '15px 0' }}
            />
          </label>
          <label>
            Password:
          <input type="password" id='password'
              //  value={email}
              onChange={handelChange}
              style={{ margin: '15px 0' }}
            />
          </label>

          <div style={StyleBtn}>

            <button type="submit" style={{ marginBottom: '15px' }} id="login" className=" btn btn-primary">
              {LoadButton ?

                <>
                  <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
             Loading...
                </>
                :
               'Login'
              }


            </button>

            <button className=" btn btn-primary reg_btn" > SignUp </button>
          </div>
        </form>
      </div>
    </div>
  )
}




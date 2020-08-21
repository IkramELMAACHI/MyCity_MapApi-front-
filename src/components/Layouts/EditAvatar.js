import React, { useState, useContext, Profiler } from "react";
import axios from 'axios';

import { Redirect } from "react-router-dom";
import { Form } from "react-bootstrap";
import {ThemeContext} from "./ThemeContext";
import { AvatarContext } from "../../App";

export default function EditAvatar() {
  const { render, setRendering} = useContext(ThemeContext );
  const {  openModel , setOpen} = useContext(AvatarContext );

  const [selectedImage, setselectedImage] = useState()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const fileInput = React.createRef();

  const onFileChange = (event) => {
    // console.log(event.target.files[0]);
    // setSelectedFile(event.target.files[0]);
    //   setRendering(!render)
    setselectedImage(fileInput.current.files[0]);
    console.log(fileInput.current.files[0]);
  };

  const SubEditAvatar = async(e) => { 
     e.preventDefault();

     console.log(openModel);

  
   
   const formData = new FormData();
  formData.append("image", selectedImage);
 const api = axios.create({
      baseURL: `http://localhost:8000/api/avatar/`,
      // data :  formData ,
      headers: {
        'Authorization': 'Bearer ' + localStorage.usertoken,
        'Content-Type': 'application/json'
      }
    })
  await api.post("/" , formData).then((res) =>{   
       console.log(res);  
       setOpen(!openModel)
      document.getElementById('Avatar').classList.add('none'); 

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
    <div className= 'add_place none'
      id="Avatar" 
     >
      <div className="place_form login_form"  style = {{height : '200px' }} >
        <i className="fa fa-times close_window"  id="Avatar_close" />
        <h3>
          Edit your Picture
            <span />
        </h3>
        <Form className=" container col-md-5 p-4"
          onSubmit={(e) => SubEditAvatar(e)} action=''
          action=''>
         <Form.Group controlId="image"   >
            <Form.File className=" txt-primary"
              ref={fileInput}
              onChange={onFileChange}
             />
          </Form.Group>  
      
          <button type='submit' className=" btn btn-primary" style={style} >Modifer </button>

        </Form>

      </div>
    </div>

  )
}


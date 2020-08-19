import React, { useState, useContext, useEffect } from "react";
import axios from 'axios'; 
import { AiOutlineCamera } from "react-icons/ai";
import { Spinner } from 'react-bootstrap'
import ThemeContext from "./ThemeContext";
import {AvatarContext} from "../../App";

export default function Profile() {
  const { render, setRendering } = useContext(ThemeContext );
  const {  openModel , setOpen} = useContext(AvatarContext );

  const [detail, setDetail] = useState({})
  const [show, setShow] = useState(false)

  const AuthStr = 'Bearer '.concat(localStorage.usertoken);
  useEffect(() => {
console.log(openModel);
    axios.get('http://localhost:8000/api/details', {
      headers: {
        'Authorization': AuthStr,
        'Content-Type': 'application/json'
      }
    }).then(response => {
      console.log(response.data);
      setDetail(response.data.success)
 
    }).catch((error) => {
      console.log('error ' + error);
    })

  },  [openModel])

  const style = {
    background: ' rgb(12, 93, 163)',
    border: '2px solid #fcf8e3 ',
    padding: ' 8px 30px',
    borderRadius: '13px',
    fontSize: '15px',
    color: 'white',
    margin: ' 46px 46px 0',
    cursor: 'pointer'

  }
const clickphoto = () =>{
  localStorage.setItem('ModalAvatar', true )
console.log(localStorage.ModalAvatar);
setOpen(true)
console.log('open') 
console.log(openModel)  


}
  var dateFormat = require('dateformat');

  return (

    <div className="profile">
      <div className="avatar">
        <img src={`http://localhost:8000${detail.avatar  }`} alt="no image " />
        <span
        //  onClick = {() => setOpen(true) }
        className="avatar_btn"
        >
          <AiOutlineCamera style={{ cursor: 'pointer' }}
            //  ref={fileInput}
            // onChange={onFileChange}
            aria-describedby="inputGroupFileAddon04" />
        </span>

      </div>
      {detail.nom   ?

        <div style={{ color: 'white', padding: '15px' }}>
          <h3>
            {detail.nom + ' ' + detail.prenom}
          </h3>

          <h5> Email : {detail.email} </h5>

          <h5> member since  : {dateFormat(detail.created_at, " mmmm d, yyyy ")}</h5>
          {/* new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(new Date(detail.created_at))) */}
        </div>

        :
        <Spinner animation='row' />
      }



      <a href="#" className="out_btn  " style={style}>
        LogOut
     </a>
      {/* </div> */}

      {/* <button className="out_btn btn btn-secondary" >
          LogOut
        </button> */}

    </div>
  );
}



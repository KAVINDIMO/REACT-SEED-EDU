import React,{useState,useEffect, Component } from 'react';
import './shome.css';
import { GoogleLogout } from 'react-google-login';
import axios from 'axios';
import SNavbar from './snavbar';
import BookStruct from '../structures/BookStruct';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { useFormik } from 'formik';

function Mwarn(){
  let history = useHistory();

    const logout = ()=>{
        localStorage.clear(); //for localStorage
        sessionStorage.clear(); //for sessionStorage
        // window.location.reload(false);
        return(
            <Redirect to="/"/>
        )
      }
      const userdata = JSON.parse(localStorage.getItem('theuser'));
      const mockid = JSON.parse(localStorage.getItem('mockid'));
      const mockname = JSON.parse(localStorage.getItem('mockname'));

      function accept(){
        history.push("/student/attmock");
      }

      function goback(){
        localStorage.removeItem('mockid');
        history.push("/student");
      } 
 

      var teacher=false
      var student=false
      if(userdata)
      {
          console.log("userdata.is_staff is ",userdata.is_staff)
        if(userdata.is_staff == true)
      {
          teacher=true
          console.log("teacher here")
      }
      if(userdata.is_staff == false){
          student=true
          console.log("student here")
      }
      }
     
      console.log(userdata)
          let center={
              marginLeft:'45%',
          };
            
return(
    
    <div className="main">
    <SNavbar/>
    <div className="inmain">
    <h1 style={center}><b>|_o_|</b></h1>
    <h1><b>MOCK WARNING</b></h1>
    <div className="qmain">
    {
        <>
        <button onClick={() => accept()}>ACCEPT</button>
        <button onClick={() => goback()}>GO BACK</button>
        </>
    }
    </div>
    <br/><br/><br/>
    </div>
    </div>
    );
}

export default Mwarn;
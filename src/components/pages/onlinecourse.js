import '../../App.css';
import React,{useState,useEffect, Component } from 'react';
import axios from 'axios';
// import Dispcards from './display';
import './onlinecourse.css';
import GLogin from './log';
import Navbar from '../navbar';

function Ocourses()
{
  const [ocourses,setocourses] = useState([]);
  const [api,setapi] = useState([false]);
  const [loading,setloading] = useState(false);
  
  const locdata = JSON.parse(localStorage.getItem('user'));
  const apilocdata = JSON.parse(localStorage.getItem('apiuser'));
  const userdata = JSON.parse(localStorage.getItem('theuser'));
  var apiavail=false;

  const { state } = ([])
  var authenticated=false;

  // try{
  //   state = this.props.location
  //   authenticated=true
  // }
  // catch{

  // }

  if(locdata!=null)
  {
    console.log("Authenticated")
    authenticated=true;
    console.log("api fetched userdata",apilocdata)
    //console.log("the signed in userdata is ",userdata)
    console.log("the signed in user is ",userdata.username)
  }
  else
  {
    console.log("Not Authenticated")
  }

  async function fetchData() {
    var apiavail=false;
    const request = await fetch(`http://127.0.0.1:8000/ocourses-list/`)
      .then(response => {
        if(response.ok)
      {
        console.log("here")
        console.log(apiavail)
        apiavail=true;
        return response.json(); 
      }
      else{
        console.log("im not here")
        console.log(apiavail)
      }
    })
      .then(data => {
        setocourses(data)
        setloading(false)
        setapi(true)
      })
      .catch((error) => {
        console.log("the error ",error)
        setapi(false)
      });
    }

useEffect(() => {
  fetchData();
}, []);
if(api)
  {
    console.log("fetched from api")
    apiavail=true;
    console.log(apiavail)
  }
  else
  {
    console.log("treid fetching api not available")
    apiavail=false;
    console.log(apiavail)
  }

  function viewcoursedes(desc) {
    alert('actually use this function to disp tip using overlay');
    // alert('${desc}');
    alert(`${desc}`);
  }

  return(
    <>
    <Navbar />
    <h1>ONLINE COURSES</h1>
    {apiavail ? (
        <>
        <p>{api}</p>
      {
      ocourses.map(item => (
      <a key={item.id}>
        <img src={item.image}/>
        <b>{item.name}</b>
        {/* <b>{item.description}</b> */}
        <b>{item.rating}</b>
        <b>{item.price}</b>
        <b>{item.link}</b>
        <button onClick={()=>viewcoursedes(item.description)}>view course desc</button>
        <br></br>
      </a>
      ))
      }
        </>
      ) : (
        <p>no api to fetch from :(</p>
      )}
    </>
    
  );
}

export default Ocourses;
import React from 'react';
import { useState, useEffect } from 'react';
import Axios, * as others from 'axios';
import {Link } from "react-router-dom"
import Header from './Header';
import Destinations from './Destinations';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  

  
  Axios.defaults.withCredentials = true;

   //will be called whenever user press login button
   const submitLogin = () => {
    
    Axios.post('http://localhost:3001/api/login', {
      
      Email: email, 
      Password: password, 
      
    }).then((response)=>{
      if(response.data.message){

            setLoginStatus(response.data.message);

      }else{
        setLoginStatus(response.data[0].email);
      }
      
    });
};

useEffect(() => {
  Axios.get("http://localhost:3001/api/login").then((response) => {
    if (response.data.loggedIn == true) {
      setLoginStatus(response.data.user[0].email);
           
    }
  });
}, []);


    return (
      
        <>
        <Header/>
          <section className='showcase login'>
            <div className='showcase-overlay'>
              
              
           
              
              <form className='form-control' >
                <input
                  type='email' 
                  name='email' 
                  id='email' 
                  placeholder='Enter Email' 
                  
                  onChange={(e) =>{
                    setEmail(e.target.value)
                } } 
                  required/>

                  

                <input type='password'
                 name='password' 
                 id='password' 
                 placeholder='Enter Password'  
                 
                 onChange={(e) =>{
                  setPassword(e.target.value)
              } }
                 required
                 autoComplete='on'
                 />

                

                <button type='submit' onClick={submitLogin}>Log In</button>
                <p>{loginStatus}</p>


                <br/>
                <Link to="../adminlogin">
                <button>
              Admin 
            </button>
            </Link>
                
                
                {/* <Link to="../admin"><button>
              Admin 
            </button>
            </Link>

            <Link to="../member"><button>
              Member 
            </button>
            </Link> */}

              </form>
            </div>
          </section>
          <div>{loginStatus}</div>
          <Destinations/>
        </>
      )
}
export default Login

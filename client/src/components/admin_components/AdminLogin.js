import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios' ;
import Destinations from '../Destinations';
import Header from '../Header';


const AdminLogin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

   //will be called whenever user press login button
   const submitLogin = () => {
    Axios.post('http://localhost:3001/api/adminlogin', {
      
      Email: email, 
      Password: password, 
      
    }).then((response)=>{
      if(response.data.message){

            setLoginStatus(response.data.message);

      }else{
        setLoginStatus(response.data[0].username);
      }
      
    });
};


    return (
      
        <>
        <Header/>
          <section className='showcase login'>
            <div className='showcase-overlay'>
              
              
           
              <b>Admin</b>
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
                 autoComplete="true"
                 />

                

                <button type='submit' onClick={submitLogin}>Log In</button>
                <p>{loginStatus}</p>

              </form>
            </div>
          </section>
          <div>{loginStatus}</div>
          <Destinations/>
        </>
      )
}
export default AdminLogin

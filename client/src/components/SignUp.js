import React from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios' ;
import Header from './Header';
import Destinations from './Destinations';

const SignUp = () => {

  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  //will be called whenever user press sign up button
  const submitRegistration = () => {
      Axios.post('http://localhost:3001/api/insert', {
        Fullname: fullname, 
        Email: email, 
        Password: password, 
        Phone: phone
      }).then(()=>{
        alert("Successfully Registered")
        
      });
  };

    return (
        <>
        <Header/>
          <section className='showcase login'>
            <div className='showcase-overlay'>

           

              <form className='form-control' >
                <input
                  type='text'
                  name='fullname'
                  id='fullname'
                  placeholder='Enter Full Name'
                  
                  onChange={(e) =>{
                      setFullname(e.target.value)
                  } }
                  required
                />
                

                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Enter Email Address'
                   
                  onChange={(e) =>{
                    setEmail(e.target.value)
                } }
                  required
                />
                

                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Enter password'
                  
                  onChange={(e) =>{
                    setPassword(e.target.value)
                } }
                  required
                />
                

                <input
                  type='text'
                  name='mobile'
                  id='mobile'
                  placeholder='Enter Phone Number'
                  
                  onChange={(e) =>{
                    setPhone(e.target.value)
                } }
                  required
                />
                

                <button type='submit' onClick={submitRegistration}>Sign Up</button>
              </form>
            </div>
          </section>
          <Destinations/>
        </>
      )
}

export default SignUp

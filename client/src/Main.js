import Axios, * as others from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import Admin from './Admin';
import Showcase from './components/Showcase';
import Member from './Member';




function Main() {
 
    const [role, setRole] = useState("");



    Axios.defaults.withCredentials = true;

    useEffect(() => {
        Axios.get("http://localhost:3001/api/login").then((response) => {
          if (response.data.loggedIn == true) {
            setRole(response.data.user[0].role);//changes the active roles within the current session
            
          }
        });
      }, []);

    return (
        <div>
            
           {/* This page will be used to route users to their page based on their role */}
            {role =="" && <Showcase />}
            {role =="admin" && <Admin />}
            {role =="member" && <Member />}
            
            
        </div>
    )
}

export default Main

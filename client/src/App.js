import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Showcase from './components/Showcase';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import Error from "./components/Error";
import Admin from "./Admin";
import Member from "./Member";

function App() {
  return (
  <Router>
    
    <Routes>
      <Route exact path='/' element={<Showcase />}/>

      <Route path='/login' element={<Login />}/>
 
      <Route path='/signup' element={<SignUp />}/>

      <Route path='/admin' element={<Admin />}/>

      <Route path='/member' element={<Member />}/>
        
      {/* <Route path='/*' element={<Error />}/> */}
    </Routes>
    
    
    <Footer/>
    
  </Router>
    
  )
}

export default App;

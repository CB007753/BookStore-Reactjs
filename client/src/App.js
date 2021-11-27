import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Showcase from './components/Showcase';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import Destinations from "./components/Destinations";
import Error from "./components/Error";
function App() {
  return (
  <Router>
    
    <Header/>
    
    <Routes>
      <Route exact path='/' element={<Showcase />}/>

      <Route path='/login' element={<Login />}/>
 
      <Route path='/signup' element={<SignUp />}/>
        
      <Route path='/*' element={<Error />}/>
    </Routes>
    <Destinations/>
    
    <Footer/>
    
  </Router>
    
  )
}

export default App;

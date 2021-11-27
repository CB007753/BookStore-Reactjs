import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

//book icon(logo) styled component
const BookImage = styled.img`
  width: 38px;
  height: 38px;
  
`;

const Header = () => {
    return (
        <>
        <header className='header'>

            <div>
                
                <Link to ='/'><BookImage src ="home.png"/> </Link>
                
            </div>
            
            

            <nav className='navbar'>
                <ul>
                        <Link className='links' to='/login'>
                            Login
                        </Link>
                        <Link className = 'links'  to = '/signup'>
                            Sign Up
                        </Link>
                </ul>
            </nav>

        </header>
        </>
    )
}

export default Header

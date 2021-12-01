import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

//book icon(logo) styled component
const BookImage = styled.img`
  width: 38px;
  height: 38px;
  
`;

const MHeader = () => {
    return (
        <>
        <header className='header'>

            <div>
                
                <Link to ='../Member'><BookImage src ="home.png"/> </Link>
                
            </div>
            
            

            <nav className='navbar'>
                <ul>
                        <Link className='links' to='/profile'>
                            View Profile
                        </Link>
                        
                        <Link className='links' to='/'>
                            Logout
                        </Link>
                        
                </ul>
            </nav>

        </header>
        </>
    )
}

export default MHeader

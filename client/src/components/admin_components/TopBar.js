import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

//book icon(logo) styled component
const BookImage = styled.img`
  width: 38px;
  height: 38px;
  
`;



const TopBar = () => {

    

    return (
        <>
        <header className='header'>

            <div>
                
                <Link to ='../Admin'><BookImage src ="home.png"/> </Link>
                
            </div>
            
            

            <nav className='navbar'>
                <ul>
                        <Link className='links' to='/editProfile'>
                            Edit Profile
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

export default TopBar

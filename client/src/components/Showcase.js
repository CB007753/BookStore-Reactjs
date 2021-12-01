import React from 'react'
import styled from 'styled-components'
import Destinations from './Destinations';
import Header from './Header';

//book icon(logo) styled component
const BookImage = styled.img`
  width: 48px;
  height: 48px;
  margin:10px;
`;

const Showcase = () => {
    return (
      <>
      <Header/>
        <section className='showcase'>
          
          <div className='showcase-overlay'>
            
          
            <h1>Showcase Book Shop</h1>
            <p>
            Where everything you need to know is only a finger touch away!
            </p>
            <BookImage src ="book-icon.png"/>
          </div>
        </section>
        <Destinations/>
        </>
      )
}

export default Showcase

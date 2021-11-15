import React from 'react'
import styled from 'styled-components'

//book icon(logo) styled component
const BookImage = styled.img`
  width: 48px;
  height: 48px;
  margin:10px;
`;

const Showcase = () => {
    return (
        <section className='showcase'>
          <div className='showcase-overlay'>
          
            <h1>Showcase Book Shop</h1>
            <p>
            Where everything you need to know is only a finger touch away!
            </p>
            <BookImage src ="book-icon.png"/>
          </div>
        </section>
      )
}

export default Showcase

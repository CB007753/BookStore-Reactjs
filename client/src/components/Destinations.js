import React from 'react'
import img1 from '../Assets/img1.jpg';
import img2 from '../Assets/img2.jpg';
import img4 from '../Assets/img4.jpg';

const Destinations = () => {
    return (
        <section className='destinations'>
          <h3>Now available in Colombo 15</h3>
          <div className='grid'>
            <div>
              <img src={img1} alt='destination-1' />
              <h3>Reserve 10 books and get 20% off</h3>
              <p>
                New and used books available for sale. Best sellers with best discount.
              </p>
            </div>
    
            <div>
              <img src={img2} alt='destination-2' />
              <h3>Experience The Never Before Book Fair</h3>
              <p>
                Hurray!! All books and videos for half price, Stay tuned..
              </p>
            </div>
    
            <div>
              <img src={img4} alt='destination-3' />
              <h3>New Addition</h3>
              <p>
                Video Games Available for PC/Xbox/PS5
              </p>
            </div>
          </div>
        </section>
      )
}

export default Destinations

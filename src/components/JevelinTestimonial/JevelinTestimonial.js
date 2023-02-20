import React from 'react';
import './JevelinTestimonial.scss';
import {TfiQuoteRight} from 'react-icons/tfi'

export const JevelinTestimonial = () => {
  return (
    <div className='jevelin-testimonial-container'>
        <div id="carouselExample" className="carousel slide carousel-fade jevelin-testimonial-carousel-container">
          <div className="carousel-inner ">
            <div className="carousel-item active">
              <div className='jevelin-testimonial-carousel-each-container'>
                <img src="https://jevelin.shufflehound.com/landing/wp-content/uploads/sites/6/2016/05/Home_10_testi_1.jpg" alt="/" className='jevelin-testimonial-carousel-image'/>
                <p className="legend">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus elit aliquam facilisis pharetra. Aenean consectetur lacinia diam a tincidunt. Vivamus facilisis lacus non velit suscipit pellentesque. Nam ac mauris nec mi lobortis sollicitudin sed at lacus. </p>
                <p className="legend">-Bella Rower</p>
                <p className='jevelin-testimonial-container-icon'><TfiQuoteRight/></p>
              </div>
             
            </div>
            <div className="carousel-item">
              <div className='jevelin-testimonial-carousel-each-container'>
                <img src="https://jevelin.shufflehound.com/landing/wp-content/uploads/sites/6/2016/05/Home_10_testi_1.jpg" alt="/" className='jevelin-testimonial-carousel-image' />
                <p className="legend">Curabitur viverra, velit nec auctor luctus, libero risus dapibus erat, non ullamcorper arcu nunc nec risus. Nunc sit amet turpis iaculis, tempus ex quis, consectetur nibh. In hac habitasse platea dictumst. In ac porta justo. Curabitur tincidunt ac ipsum eget fermentum. Quisque et nulla ut ipsum ornare commodo. Nam faucibus nec orci quis varius. </p>
                <p className="legend">-Bella Rower</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
    </div>
  )
}

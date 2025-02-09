'use client';
import React from 'react';  
import AliceCarousel from 'react-alice-carousel';  
import 'react-alice-carousel/lib/alice-carousel.css';  
import testimonial from '../../../data/testimonial';  
import Image from 'next/image';  

const Testimonial = () => {  
  const items = testimonial.slice(0, 4).map((item) => (  
    <div className="item" key={item.id}>  
      <div className="feedback-block-eleven">  
        <div className="top-header d-flex align-items-center justify-content-between">  
          <div>  
            <h3 className="tx-dark m0">{item.title}</h3>  
            <ul className="style-none d-flex rating pt-15">  
              {Array.from({ length: item.rating }).map((_, index) => (  
                <li key={index}>  
                  <i className="bi bi-star-fill" />  
                </li>  
              ))}  
            </ul>  
          </div>  
          <img src="images/icon/icon_112.svg" alt="" width={50} />  
        </div>  
        <p className="tx-dark">{item.text}</p>  
        <div className="d-flex align-items-center justify-content-between">  
          <div className="cost fw-500 tx-dark fs-20">  
            {item.author},{' '}  
            <span className="opacity-50 fw-normal">{item.location}</span>  
          </div>  
          <Image  
            width={60}  
            height={60}  
            alt="testimonial avatar"  
            src={item.image} // Ensure this path is correct  
            className="rounded-circle"  
          />  
        </div>  
      </div>  
    </div>  
  ));  

  return (  
    <AliceCarousel  
      items={items}  
      autoPlay  
      autoPlayInterval={3000}  
      fadeOutAnimation  
      infinite  
      mouseTracking  
      responsive={{  
        0: { items: 1 },  
        520: { items: 2 },  
        992: { items: 3 },  
      }}  
      controlsStrategy="alternate"  
    />  
  );  
};  

export default Testimonial;
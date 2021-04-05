import React from 'react';
import '../../App.css';
import '../resources/css/HeroSection.css';

export default function Services() {
  return(
    <>
       
       <div className='hero-container'>
       <video src="/videos/video.mp4" autoPlay loop muted />
       <h1 className='services'>SERVICES</h1>;
       </div>
    </>
  );
}
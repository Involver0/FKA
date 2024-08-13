import React from 'react';
import { SlMagnifier } from 'react-icons/sl';

const Hero = () => {
  return (
    <div className='hero'>
      <h1>
        Find Home <span>Service/Repair</span>
      </h1>
      <p>Explore Best Home Service & Repair near you</p>
      <div className='hero__search'>
        <input type='text' />
        <button>
          <SlMagnifier />
        </button>
      </div>
    </div>
  );
};

export default Hero;

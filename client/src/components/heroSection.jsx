import React from 'react';
import '../App.css';
import { Button } from './Button';
import './css/heroSection.css';
import Search from './search'


function HeroSection() {
  return (
    <div className='hero-container'>
    
      <h1>Let's Traveled Together</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Search />

      </div>
    </div>
  );
}

export default HeroSection;
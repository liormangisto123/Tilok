import React from 'react';
import '../App.css';
import { Button } from './Button';
import './css/heroSection.css';
import Search from './search'
// import List from './LIstGuides';

function HeroSection({history}) {
  return (
    <div className='hero-container'>
    
      <h1>Let's Travel Together</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Search  history={history}/>

      </div>
    </div>
  );
}

export default HeroSection;
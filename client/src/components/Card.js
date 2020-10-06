import React from 'react';
import './css/card.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='assets/et.jpg'
              text='Explore the ethiopia Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='assets/barc.jpg'
              text='Travel in barcelona'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='assets/Extreme.jpg'
              text='Extreme trip'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='assets/south.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='assets/la.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
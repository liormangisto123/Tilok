import React from 'react';
// import { div } from 'react-router-dom';
import Modal from '../../src/components/pages/profile'


function ListDisplay(props) {
  return (
    <>
      <li className='cards__item'>
        {/* <div className='cards_item_div'>
          <figure className='cards_item_pic-wrap' data-category={props.label} >
            { <img
              width="40%"
              height="40%"
              className='cards_item_img'
              alt='Travel Image'
              src={props.src}
            /> }
          </figure>
          </div> */}
          <div className='cards_item_info' >
            {/* <h5 className='cards_item_text'>{props.text}</h5> */}
            <Modal text={props.text}  src={props.src} country={props.country} cost={props.cost} com={props.com}
            date={props.date} summery={props.summery}/>
            
          </div>
        
      </li>
    </>
  );
}

export default ListDisplay;
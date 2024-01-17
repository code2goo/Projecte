import React from 'react';
import './contact_us.css';

function Card_Social(props) {
  return (
    <div className='col-md-4 col-sm-6'>
      <div className='card'>
        <div className='card_header'>
            <img style={{maxWidth: '100%'}} src={props.info.img} alt="" />
        </div>
        <div className='card_body'>
            <h2 text={props.info.socialTitle}/>
            <a link={props.info.moreInfo} />
        </div>
      </div>
    </div>
  )
};

export default Card_Social;
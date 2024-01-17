import React from 'react';
import './contact_us.css';

function card(props) {
  return (
    <div className='col-md-4 col-sm-6'>
      <div className='card'>
        <div className='card_header'>
            <img style={{maxWidth: '100%'}} src={props.info.img} alt="" />
        </div>
        <div className='card_body'>
            <h2 text={props.info.contactName}/>
            <h2 text={props.info.contactTitle}/>
            <p text={props.info.contactAdress} />
            <h4 text={props.info.contactBankName}/>
            <p text={props.info.contactBankIban}/>
            <p text={props.info.contactBankBic}/>
            <a link={props.info.contactPaypal} />
        </div>
      </div>
    </div>
  )
};

export default card;
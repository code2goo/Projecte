import React from 'react';
import "./LaunchModalButton.css"
import popupImg from "../Images/icons8-message-100.png";
function LaunchModalButton({ onClick }) {
  return (
    <>
      <button className="button fixed-bottom-ar  " onClick={onClick}>
        <img src={popupImg} alt="popupImg" className='popupImg'/>
        <div class="button__horizontal"></div>
        <div class="button__vertical"></div>
      </button>
    </>
  );
}

export default LaunchModalButton;

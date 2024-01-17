import React from 'react';
import './contact_us.css';
import { Link } from "react-router-dom";
import facebook_icon from './img/icons8-facebook-500.png'
import instagram_icon from './img/icons8-instagram-500.png'
import twitter_icon from './img/icons8-twitter-500.png'
import youtube_icon from './img/icons8-youtube-500.png'
import email_icom from './img/email-1.png'
import tel_icom from './img/phone.png'

import { useTranslation} from "react-i18next";

const Contact_us = () => {
    const [t] = useTranslation();
  return (
    <div>
        <div className='container mt-5'>
            <div className="card">
                <Link to="https://www.facebook.com/IhsanIHHO">    
                  <img src={facebook_icon} className="card-img-top" alt="facebook_icon" />
                </Link>
                  <div className="card-body">
                    <p className="card-text">
                    {t("OurFacebookAccount")}
                    </p>
                  </div>
            </div>
            <div className="card">
                <Link to="https://www.instagram.com/ihsan_ev/">    
                  <img src={instagram_icon} className="card-img-top" alt="instagram_icon" />
                </Link>
                  <div className="card-body">
                    <p className="card-text">
                    {t("OurInstagramAccount")}
                    </p>
                  </div>
            </div>
            <div className="card">
                <Link to="https://twitter.com/IhhoIhsan">    
                  <img src={twitter_icon} className="card-img-top" alt="twitter_icon" />
                </Link>
                  <div className="card-body">
                    <p className="card-text">
                    {t("OurTwitterAccount")}
                    </p>
                  </div>
            </div>
            <div className="card">
                <Link to="https://www.youtube.com/@ihsane.v.119/featured">    
                  <img src={youtube_icon} className="card-img-top" alt="youtube_icon" />
                </Link>
                  <div className="card-body">
                    <p className="card-text">
                    {t("OurYoutubeAccount")}
                    </p>
                  </div>
            </div><hr />
            <div className="card">
                <Link to="https://www.youtube.com/@ihsane.v.119/featured">    
                  <img src={email_icom} className="card-img-top" alt="youtube_icon" />
                </Link>
                  <div className="card-body">
                    <p className="card-text">
                    {t("OurEmailAccount")}
                    </p>
                  </div>
            </div>
            <div className="card">
                <Link to="https://www.youtube.com/@ihsane.v.119/featured">    
                  <img src={tel_icom} className="card-img-top" alt="youtube_icon" />
                </Link>
                  <div className="card-body">
                    <p className="card-text">
                    {t("OurTelAccount")}
                    </p>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Contact_us
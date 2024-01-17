import "./Header.css";
import { Link } from "react-router-dom";
import facebook_icon from '../Images/facebook.png';
import instagram_icon from '../Images/instagram.png';
import twitter_icon from '../Images/twitter.png';
import youtube_icon from '../Images/youtube.png';

import { useTranslation} from "react-i18next";

const Header = () => {

      const [ t, i18n ] = useTranslation();

      const handleLanguageChange = (selectedLanguage) => {
            // Change the language 
            i18n.changeLanguage(selectedLanguage);
            // Change the page Direction
            if (selectedLanguage === "ar") {
              document.documentElement.setAttribute("dir", "rtl");
            } else {
              document.documentElement.setAttribute("dir", "ltr");
            }

          };

      return (
            <header className="header navbar navbar-expand-md ">
                  <button
                        className='navbar-toggler toggler_Btn'
                        type='button'
                        data-bs-toggle="collapse"
                        data-bs-target="#mainmenu">
                        <span className='navbar-toggler-icon'></span>
                  </button>
              <div className=" navbar-collapse collapse header navbar navbar-expand-md justify-content-center" id="mainmenu">
                  <ul className="navbar-nav text-center header_ul_main">
                        <li className="header_li"><Link to="/About_us" className="text-decoration-none text-light"> {t("AboutUs")}</Link></li>
                        <li className="header_li"><Link to="/Usage_Policy" className="text-decoration-none text-light">{t("UsagePolicy")}</Link></li>
                        <li className="header_li"><Link to="/Donation" className="text-decoration-none text-light"> {t("Donations")}</Link></li>
                        <li className="header_li"><Link to="/Contact_us" className="text-decoration-none text-light"> {t("ContactUs")}</Link></li>
                  </ul>
                  <ul className="Header_ul_language navbar-nav text-decoration-none">
                        <li className="language_li language_li_ar ">
                              <Link  to="" className="text-decoration-none text-light" 
                              onClick={() => handleLanguageChange("ar")}> العربية
                              </Link></li>
                        <li className="language_li ">
                              <Link  to="" className="text-decoration-none text-light" 
                              onClick={() => handleLanguageChange("en")}> English
                              </Link></li>
                        <li className="language_li ">
                              <Link  to="" className="text-decoration-none text-light" 
                              onClick={() => handleLanguageChange("de")}> Deutsch
                              </Link></li>
                        <li className="language_li ">
                              <Link  to="" className="text-decoration-none text-light" 
                              onClick={() => handleLanguageChange("tr")}> Türkçe
                              </Link></li>
                  </ul>
                  <ul className="Header_ul_Socialmedia navbar-nav d-inline p-0 ">
                        <Link to="https://www.facebook.com/IhsanIHHO" className="text-decoration-none text-light social_icon pe-2 ">    
                              <img src={facebook_icon} alt="facebook_icon" className="socialImg"/>
                        </Link>
                        <Link to="https://www.instagram.com/ihsan_ev/" className="text-decoration-none text-light social_icon pe-2">    
                              <img src={instagram_icon} alt="instagram_icon" className="socialImg"/>
                        </Link>
                        <Link to="https://twitter.com/IhhoIhsan" className="text-decoration-none text-light social_icon pe-2">    
                              <img src={twitter_icon} alt="twitter_icon" className="socialImg"/>
                        </Link>
                        <Link to="https://www.youtube.com/@ihsane.v.119/featured" className="text-decoration-none text-light social_icon pe-2">    
                              <img src={youtube_icon} alt="youtube_icon" className="socialImg"/>
                        </Link>
                  </ul>
               </div>
            </header>
  )};

export default Header;

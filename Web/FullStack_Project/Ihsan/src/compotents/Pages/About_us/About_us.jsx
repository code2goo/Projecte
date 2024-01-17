import './About_us.css';
// import Ihsan_Team from './Ihsan_Team';
import { Link } from "react-router-dom";
import facebook_icon from './img/icons8-facebook-500.png'
import instagram_icon from './img/icons8-instagram-500.png'
import twitter_icon from './img/icons8-twitter-500.png'
import youtube_icon from './img/icons8-youtube-500.png'

import { useTranslation} from "react-i18next";

const About_us = () => {
    const [ t, i18n ] = useTranslation();
  return (
    <>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/5LpYu25XgXo?si=IsPkRGha72jmwZSe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
        </iframe>
        <p className="about_us_p" >
            {t("AboutUsInfo")}
        </p> 
    </>
  )
};

export default About_us;

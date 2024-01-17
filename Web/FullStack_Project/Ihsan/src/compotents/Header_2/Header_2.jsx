import logo from '../Images/logo1.png';
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import './Header_2.css';
import profileImg from "../../compotents/Pages/UserProfile/ImgMenu/icons8-test-account-100.png"

import { useTranslation} from "react-i18next";

const Header_2 = () => {
    const [ t] = useTranslation();
    const [cookies] = useCookies (["access_token"]);
    const username = localStorage.getItem("username");
    const [_, setCookies] = useCookies(["access_token"]);
    
    const removeCookies = () => {
      setCookies("access_token", "")
      window.localStorage.removeItem("userID")
     }

    return(
    <header className="header_2 navbar navbar-expand-md 
                        container-fluid d-flex align-items-center justify-content-around">
          <img src={logo} className="header_logo navbar-nav " alt="logo"/>
          <ul className="header_main navbar-nav">
                  <li >
                      <Link to="/" className="nav-link">
                        {t("Home")}  
                      </Link>  
                  </li> 
                  <li>
                      <Link to="/Cases" className="nav-link">
                        {t("Cases")}  
                      </Link>  
                  </li>
                  <li>
                    <Link to="/Campaigns" className="nav-link">
                    {t("Campaigns")}   
                    </Link> 
                  </li>
                  <li>
                    <Link to="/Sponsorships" className="nav-link">
                    {t("Sponsorships")}   
                    </Link> 
                  </li>
                  <li>
                    <Link to="/Gallary" className="nav-link">
                    {t("Gallary")}   
                    </Link> 
                  </li>
          </ul>
        <div className="header_login navbar-nav m-lg-auto">
              {cookies.access_token ? (
                  <>
                      <Link to="/UserProfile" className="Button nav-link profileImg">
                      <img src={profileImg} alt="" style={{ width: "30px" }} />
                            {username}
                      </Link>
                      <Link to={"/"} className="Button bg-danger align-self-center nav-link" onClick={removeCookies}>Logout</Link>
                  </>
                  ) : (
                    <>
                      <Link to="/Login" className="Button nav-link"> 
                        {t("LogIn")}
                      </Link>
                      <Link to="/Registration" className="Button nav-link">
                        {t("Registration")}
                      </Link>
                    </>
              )}
        </div>
    </header>
    )};

export default Header_2;





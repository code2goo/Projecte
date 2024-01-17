import "./Main.css";
import MainGallary from "./MainGallary";
import { useTranslation} from "react-i18next";

const Main_Info = () => {
  const [t] = useTranslation();
  return (
    <div className="container col-7 text-center">
          <div className="word-wrap mt-5">
            <h3>قال تعالى: ﴿ هَلْ جَزَاءُ الْإِحْسَانِ إِلَّا الْإِحْسَانُ ﴾</h3><br />
            <p>{t("IhsanInfoMain")}</p><hr />
          </div>
          <div className="d-flex container"> 
            <MainGallary /><MainGallary /><MainGallary />
          </div>
          <hr />
          <div className="cards row justify-content-center">
              <div className="card p-1" >
                <div className="card-body col ">
                  <p className="card-text">{t("FirstCardInfoMain")}</p>
                </div>
              </div>
              <div className="card p-1" >
                <div className="card-body col">
                  <p className="card-text">{t("SecoundCardInfoMain")}</p>
                </div>
              </div>
              <div className="card p-1" >
                <div className="card-body col ">
                  <p className="card-text">{t("ThirdCardInfoMain")}</p>
                </div>
              </div>
              <div className="card p-1" >
                <div className="card-body col ">
                  <p className="card-text">{t("FourthCardInfoMain")}</p>
                </div>
              </div>
          </div><hr />
          <div className="main_donation text-center ">
              <p>{t("OneTimeDonation")}</p>
              <form>
                  <label htmlFor="">{t("ChooseTheAmount")} </label> <br />
                  <button type="button" className="Button">15€</button>
                  <button type="button" className="Button">25€</button>
                  <button type="button" className="Button">50€</button>
                  <button type="button" className="Button">100€</button>
              </form><br />
              <div className="">
              <input type="text" className="Main_Input_Donation" placeholder="€" required size="5" />
              <button className="Button"> {t("Donation")}</button>
              </div><br />
          </div>
    </div>
  )
};

export default Main_Info;


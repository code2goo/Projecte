import "./Main.css";

import Main_Info from './Main_Info.jsx';
import main_img from "./img/background_Image1.jpg";

import { useTranslation} from "react-i18next";

function Main() {
  const [t] = useTranslation();
  return (
    <main className="main container-fluid ">
      <img src={main_img} className=" img-fluid full_width_img"/>
      <Main_Info />
      <hr />
    </main>
  )
};

export default Main;
import "./Footer.css"

import { useTranslation} from "react-i18next";

function Footer() {
  const [ t] = useTranslation();
  return (
      <footer className="footer text-center fixed-bottom">
         <p>{t("Footer")}</p>
      </footer>
  )
}

export default Footer

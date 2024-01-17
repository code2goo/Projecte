import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './cases.css';
import { useTranslation} from "react-i18next";
import mohamad from "./Img/mohamad.jpg";
import ahmad from "./Img/ahmad.jpg";
import fatema from "./Img/fatema.jpg";
import hasan from "./Img/hasan.jpg";
import noura from "./Img/noura.jpg";

function CaseCard(props) {
    const { caseData } = props;
    const [ t] = useTranslation();
    const [isFlipped, setIsFlipped] = useState(false);
    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    // const caseImages = {
    //     mohamad,
    //     ahmad,
    //     fatema ,
    //     hasan ,
    //     noura
    // }
    const renderFront = (
        <div className='card-front'>
            <div className='card-header'>
                <img src={mohamad} alt="" className='card-img-top' />
            </div>
            <div className='card-body'>
                <h5 className='m-2'>{caseData.caseName}</h5>
                <div>{t("Total")} <span> </span> {caseData.caseDonation} €</div>
                <div>{t("Rest")} <span> </span>{caseData.caseRemaining} €</div>
            </div>
            <div className='card-link'>
                <Link onClick={handleFlip} className='btn'>
                    Mehr Informationen
                </Link>
            </div>
        </div>
    );

    const renderBack = (
        <div className='card-back'>
            <div className='card-body'>
                 <h5 className='m-2'>{caseData.caseName}</h5>
            </div>
            <div className='card-body'>
                <p>{caseData.caseInfo}</p>
                <div>{caseData.caseType}</div>
                <div><span>--</span></div>
                <div><span>--</span></div>
                <div>{caseData.caseStatus}</div><br />
            </div>
            <div className=''>
                <Link onClick={handleFlip} className='btn'>
                    رجوع
                </Link>
                <Link to="/Donation" className='btn'>
                    تبرع
                </Link>
            </div>
        </div>
    );

    return (

        <div>
            <div className={`card ${isFlipped ? "is-flipped" : ""}`} style={{ width: "15rem" }}>
                <div className="card-inner">
                    {isFlipped ? renderBack : renderFront}
                </div>
            </div>
        </div>
    );
}

export default CaseCard;
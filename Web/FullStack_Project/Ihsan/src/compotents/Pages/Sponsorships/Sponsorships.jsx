// الكفالات
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Sponsorships.css';
import SponsorshipsCard from './SponsorshipsCard.jsx';
// import CaseForm from './CaseForm';
import CaseBackground from "../Gallary/Img/ihsan_team11.jpg"
// import { useTranslation} from "react-i18next";

function Sponsorships() {
  
  // const [t] = useTranslation();
    const [cases, setCases] = useState([]);
    const [caseID, setCaseID] = useState('');
    const [caseName, setCaseName] = useState('');
    const [caseImg, setCaseImg] = useState('');
    const [caseInfo, setCaseInfo] = useState('');
    const [caseType, setCaseType] = useState('');
    const [caseStatus, setCaseStatus] = useState('');
    const [caseDonation, setCaseDonation] = useState('');
    const [caseRemaining, setCaseRemaining] = useState('');
    const [caseLink, setCaseLink] = useState('');

  
    useEffect(() =>{
      async function fetchCases(){
        const res = await axios.get("http://localhost:3001/Cases")
        setCases(res.data);
      }
      fetchCases();
    },[]);

    useEffect(()=> {
      axios.get("http://localhost:3001/Cases")
      .then(res => {
        setCases(res.data)
      })
    },[cases])

    const newCase = async (e) => {
    // e.preventDefault();
    await axios.post("http://localhost:3001/newCase",{
        caseID, caseName, caseImg, caseInfo, caseType, caseStatus, caseDonation, caseRemaining, caseLink
      })
      .then(res => (res.data))
      .catch (error => {
        console.log(error);
      });
    
  };
  return (
    <div className='container justify-content-center mt-5' >
      <img src={CaseBackground} className=" img-fluid full_width_img rounded-5 mb-4"/>
            {cases.map((caseData) =>(
                  <SponsorshipsCard key={caseData._id} caseData={caseData} />
                  // <Link to={`/case/${caseData._id}`} key={caseData._id}>
                  //     {/* Verwende den Link-Komponenten, um zu einer Detailseite zu navigieren */}
                  //     {/* <CaseCard caseData={caseData} /> */}
                  // </Link>
                
            ))}
    </div>
 )};
export default Sponsorships;



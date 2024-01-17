import { useState, useEffect } from 'react';
import axios from 'axios';
import './cases.css';
import CaseCard from './CaseCard.jsx';
// import CaseForm from './CaseForm';
import CaseBackground from "../Gallary/Img/ihsan_team5.jpg"
// import { useTranslation} from "react-i18next";

function Cases() {
  
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
    <div className='container justify-content-center mt-5 ' >
            <img src={CaseBackground} className=" img-fluid full_width_img rounded-5 mb-4"/>
            {cases.map((caseData) =>(
                  <CaseCard 
                      key={caseData._id}
                      caseData={caseData}
                      />
                  // <Link to={`/case/${caseData._id}`} key={caseData._id}>
                  //     {/* Verwende den Link-Komponenten, um zu einer Detailseite zu navigieren */}
                  //     {/* <CaseCard caseData={caseData} /> */}
                  // </Link>
                
            ))}
            {/* <CaseForm
                    caseID={caseID}
                    caseName={caseName}
                    caseInfo={caseInfo}
                    caseType={caseType}
                    caseStatus={caseStatus}
                    caseDonation={caseDonation}
                    caseRemaining={caseRemaining}
                    setCaseID={setCaseID}
                    setCaseName={setCaseName}
                    setCaseInfo={setCaseInfo}
                    setCaseType={setCaseType}
                    setCaseStatus={setCaseStatus}
                    setCaseDonation={setCaseDonation}
                    setCaseRemaining={setCaseRemaining}
                    newCase={newCase}
                  />  */}
         {/* <form action="" className='login_container card' style={{width: "15rem"}}>
              <div>
                  <input className='form-control m-1' type="number" value={caseID} placeholder="رقم الحالة"  onChange={(e) => setCaseID(e.target.value)}/>
              </div>
              <div>
                  <input style={{width: "100%"}} type="file" value={caseImg} placeholder='إضافة صورة' onChange={(e) => setCaseImg(e.target.value)}/>
              </div>
              <div>
                  <input className='form-control m-1' type="text" value={caseName} placeholder=' الإسم الكامل' onChange={(e) => setCaseName(e.target.value)}/>
              </div>
              <div>
                  <input className='form-control m-1' type="text" value={caseInfo} placeholder='معلومات عن الحالة' onChange={(e) => setCaseInfo(e.target.value)}/>
              </div>
              <div>
                  <input className='form-control m-1' type="text" value={caseType} placeholder='النوع' onChange={(e) => setCaseType(e.target.value)}/>
              </div>
              <div>
                  <input className='form-control m-1' type="text" value={caseStatus} placeholder='الحالة' onChange={(e) => setCaseStatus(e.target.value)}/>
              </div>
              <div>
                  <input className='form-control m-1' type="number" value={caseDonation} placeholder='المبلغ المطلوب' onChange={(e) => setCaseDonation(e.target.value)}/>
              </div>
              <div>
                  <input className='form-control m-1' type="number" value={caseRemaining} placeholder='المبلغ المتبقي' onChange={(e) => setCaseRemaining(e.target.value)}/>
              </div>
            <button type="submit" onClick={newCase} className='text-center'>Add new Case</button>
        </form> */}
    </div>
 )};
export default Cases;



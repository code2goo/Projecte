import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Importiere useParams aus react-router-dom


const CaseInfo = () => {
    const { caseId } = useParams(); // Hole die caseId aus den URL-Parametern
    const [caseData, setCaseData] = useState({});
  
    useEffect(() => {
      async function fetchCaseData() {
        const res = await axios.get(`http://localhost:3001/Cases/${caseId}`);
        setCaseData(res.data);
      }
      fetchCaseData();
    }, [caseId]);

    return (
        <div className='container'>
          <h2>{caseData.caseName}</h2>
          <p>{caseData.caseInfo}</p>
          <div>{caseData.caseType}</div>
          <div>{caseData.caseStatus}</div>
          <div>{caseData.caseDonation}</div>
          <div>{caseData.caseRemaining}</div>
        </div>
      );
    }

export default CaseInfo;

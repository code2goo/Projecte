

function CaseForm({
  caseID,
  caseName,
  caseInfo,
  caseType,
  caseStatus,
  caseDonation,
  caseRemaining,
  setCaseID,
  setCaseName,
  setCaseInfo,
  setCaseType,
  setCaseStatus,
  setCaseDonation,
  setCaseRemaining,
  newCase,
}) 
    
{
  return (
    <form className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">Add a New Case</h5>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            value={caseID}
            placeholder="رقم الحالة"
            onChange={(e) => setCaseID(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={caseName}
            placeholder="الإسم الكامل"
            onChange={(e) => setCaseName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={caseInfo}
            placeholder="معلومات عن الحالة"
            onChange={(e) => setCaseInfo(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={caseType}
            placeholder="النوع"
            onChange={(e) => setCaseType(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={caseStatus}
            placeholder="الحالة"
            onChange={(e) => setCaseStatus(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            value={caseDonation}
            placeholder="المبلغ المطلوب"
            onChange={(e) => setCaseDonation(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            value={caseRemaining}
            placeholder="المبلغ المتبقي"
            onChange={(e) => setCaseRemaining(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={newCase}
        >
          Add new Case
        </button>
      </div>
    </form>
  );
}

export default CaseForm;
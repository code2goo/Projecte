const mongoose = require("mongoose");
const caseSchema = new mongoose.Schema({
    caseID: {type : Number},
    caseImg: {type : String},
    caseName: {type : String},
    caseInfo: {type : String},
    caseType:{type :String},
    caseStatus:{type :String},
    caseDonation:{type :Number},
    caseRemaining:{type :Number},
})

const caseModel = mongoose.model("Cases", caseSchema);
module.exports = caseModel;
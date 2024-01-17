const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
    donationUserID: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
    donationCaseID: { type: mongoose.Schema.Types.ObjectId, ref: "Cases" },
    amount: {type : Number},
    paymentMethod: {type : String},
    timestamp: { type: Date, default: Date.now }
});

const DonationModel = mongoose.model("Donations", donationSchema);

module.exports = DonationModel;
const mongoose = require('mongoose');
const jobSchema = mongoose.Schema({
    companyName: { type: String, required: true },
    postition: { type: String, required: true },
    contract: { type: String, required: true },
    location: { type: String, required: true },

}, {
    timestamps: true,
})
const Job = mongoose.model("Job", jobSchema);
module.exports = Job;

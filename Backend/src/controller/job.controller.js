const Job = require("../features/models/job.model")
const createJob = async (req, res) => {
    try {
        const { companyName, postition, contract, location } = req.body;
        console.log(req.body)
        if (!companyName || !postition || !contract || !location) {
            return res.send({ msg: "Please Enter all the fields" });
        }
        const job = new Job({
            ...req.body,

        });
        await job.save();
        res.status(201).send({ job, msg: "job uploaded" });
    }
    catch (err) {
        res.send(err)
    }
}
const getAllJob = async (req, res) => {
try{
    const alljobs=await Job.find();
    res.send(alljobs)
}catch(err){
    res.send(err)
}
}


module.exports = { createJob, getAllJob }
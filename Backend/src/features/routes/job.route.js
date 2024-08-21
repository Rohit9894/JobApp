const express = require("express");
const router = express.Router();
const { createJob, getAllJob } = require("../../controller/job.controller")
router.route("/postJob").post(createJob)
router.route("/allJob").get(getAllJob)

module.exports = router;
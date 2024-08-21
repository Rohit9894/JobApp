const express = require("express");
const connect = require("./config/db")
const cors = require("cors")
const userRouter = require("./features/routes/user.route")
const jobRouter = require("./features/routes/job.route")
const app = express();
// app.use(
//     cors({
//         origin: "*"
//     })
// )
app.use(express.json())
app.use("/user", userRouter)
app.use("/job", jobRouter)

app.listen(5000, async () => {
    await connect();
    console.log("http://localhost:5000");
});
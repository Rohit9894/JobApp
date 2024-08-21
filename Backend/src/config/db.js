const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const connect = async () => {
    return await mongoose.connect("mongodb+srv://r:g@cluster0.nlwaw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    });
};

module.exports = connect;
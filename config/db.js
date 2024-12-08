const mongoose = require("mongoose");
const mongoURI = process.env.MONGODB_URL;

const connect = async () =>{
    try {
        await mongoose.connect(mongoURI);
        console.log("Database connected");
    } catch (error) {
        console.log(`Error Connecting Database ${error}`);
    }
}

module.exports = connect;
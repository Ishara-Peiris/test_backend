//loading the configurations
import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"

//initialize the express app
const app = express();

//create middleware to handle json via bodyparser
//“Hey, parse that JSON and make it available in req.body.”
app.use(bodyParser.json());

//Loads environment variables from a .env file into process.env.
dotenv.config();
const PORT = process.env.PORT || 5000;//IF PORT not default is 5000
const MONGOURL = process.env.MONGO_URL;

//CONNECT WITH MONGODB
Mongoose.connect(MONGOURL).then( ()=>{
    console.log("databse connected successful!")
    app.listen(PORT, ()=>{
        console.log('server is running on port ${PORT}')
    })
})

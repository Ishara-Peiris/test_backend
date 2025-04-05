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
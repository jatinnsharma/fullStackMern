//this dotenv work fine but not good for code behaviour
// require('dotenv').config({path:'./env'})

// better way to add dotenv
import dotenv from "dotenv"
dotenv.config({
    path:"./env"
})

import express from 'express'
const app = express();
import connectDB from "./db/index.js";




//connect to database
connectDB()
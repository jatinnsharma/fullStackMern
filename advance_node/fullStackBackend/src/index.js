import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from 'express'

const app = express();
//connect to database
;(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("Error:",error);
            throw error;
        })
        app.listen(process.env.PORT,()=>{
            console.log(`server is running on PORT : ${process.env.PORT}`)
        })
    }catch(error){
        console.error("Error: ",error)
        throw error;
    }
})()
import dotenv from "dotenv"
dotenv.config({
    path:"./env"
})

import connectDB from "./db/index.js";
import {app} from "./app.js"


//connect to database
connectDB()
.then(()=>{
    app.on("Error",(error)=>{
        console.log('Error',error);
        throw error;
    })
    app.listen(process.env.PORT || 8000 ,()=>{
        console.log(`Server is running at port : ${process.env.PORT}`)
    } )
})
.catch((err)=>{
    console.log("MONGO db connection failed !!!",err)
})
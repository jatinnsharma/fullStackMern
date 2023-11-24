import express from 'express'
import cors from "cors";
import cookieParser from 'cookie-parser';

const app = express()

// use is used for middleware and for configuration
// app.use(cors()) enable all cors requests

//kha se requests accept we define here
app.use(cors({ 
    origin:process.env.CORS_ORIGIN, 
    credentials:true
}))

// accepte json from frontend  phle hum body-parser ka krte the 
app.use(express.json({limit:'16kb'}))

// express.urlencoded is used as middleware to parse incoming form data from POST requests, and the parsed data is available in req.body for further processing.
app.use(express.urlencoded({extended:true,limit:true}))

// use for storing static file like pdf 
app.use(express.static("public"))

// user ki cookies pe operation || curd ke liye use krte hai 
app.use(cookieParser())


// middleware
// It is those methods/functions/operations that are called BETWEEN processing the Request and sending the Response in your application method.

export {app}

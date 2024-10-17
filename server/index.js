const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");


const app = express();
const PORT = process.env.PORT || 8800;
let server;

// connecting to database
mongoose.connect(process.env.DB_URI,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("Database connected ... ")
}).catch((err)=>{
    console.log("error connecting to database")
})


server = app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT} ...`)
})
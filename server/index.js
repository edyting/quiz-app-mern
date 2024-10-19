const express = require("express");
const cors = require("cors");
require("dotenv").config();
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes = require("./routes/users")

const app = express();
const PORT = process.env.PORT || 5000;
let server;

// middlewares
app.use(cors());
app.use(bodyparser.urlencoded({extended:true, limit:"20mb"}));
app.use(bodyparser.json({limit:"20mb"}));

app.use('/api/users/',userRoutes)

// connecting to database
mongoose.connect(process.env.DB_URI,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("Database connected ... ")
}).catch((err)=>{
    console.log("error connecting to database")
})


app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT} ...`)
})

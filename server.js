const express= require("express");
require("dotenv").config();
const connectdb= require("../backend/config/connectdb");
const router= require("../backend/routes/route");
const app= express();
const port= process.env.PORT || 8080
const MONGO_URL= process.env.MONGO_URL

app.use(express.json());

app.use("/api",router)

app.get("/",(req,res)=>{

    res.send("Everything is fine");
})




app.listen(port,(req,res)=> {

    connectdb(MONGO_URL)
    console.log(`Server running at http://localhost:${port}/`)
})
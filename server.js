require('dotenv').config()
const express=require('express');
const mongoose = require('mongoose');
const app = express()
const connection = require('./db');
connection()

// const cors = require('cors')
const cors = require('cors')



// middleware
app.use(express.json())  // json file getting
app.use(cors())       // cors frontend middleware

const port= process.env.PORT || 8080

const  user= require('./Routes/user')
const  product= require('./Routes/product')
const business=require('./Routes/businessInfo')
const buyer=require('./Routes/buyer')
const supplier=require('./Routes/supplier')




// Database Connection ( Mongodb Atlas)

//  mongoose.connect("mongodb+srv://admin:n4TCEyQE6rNykSEP@cluster0.5npci.mongodb.net/user?retryWrites=true&w=majority").then(data=>{console.log(' Database connection Success');
//  }).catch(err =>{
//      console.log(err);
//  })



// Routes 
app.use("/auth", require("./Routes/user"))
app.use("/product", require("./Routes/product"))
app.use("/business",require("./Routes/businessInfo"))
app.use("/buyer",require("./Routes/buyer"))
app.use("/supplier",require("./Routes/supplier"))














// server
app.listen(port,()=>{
    console.log(`server Running at Port ${port}`)
})
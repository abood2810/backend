const express = require('express')
const web=express();
const url ='mongodb+srv://abdallah:abood28@cluster0.3fqjsp0.mongodb.net/?retryWrites=true&w=majority'
const mangoose =require('mongoose')
const routes = require ('./routes/week7.1')
const cors = require('cors');
web.use(cors())

const port = 28;

web.listen(port,() => {
    console.log("Server is launching",port)
 
})


mangoose.connect (url).then (() => {
    console.log('true')
}).catch((error) => {console.log(error)})

web.use(express.json())
//routes 
web.use('/api',routes)


const sign = new mangoose.Schema({
    email :{type : String, requried:true},
    password : {type : String, required:true},
    phonenumber : {type : Number, required:true},


})





// import the express & formidable library
const express = require('express');
const formidable = require('formidable');

// create object
const app = express();

//middle ware function 
app.use(express.json());

// Create an end-point
app.post("/create",(req,res)=>{
  
    //for handling new request .i.e file/data we need to create a formidale object 
    // here we are sure we will reciving a file
    const form = new formidable.IncomingForm();
    
    // we simply parse incoming request by using parse() method by passing req 
    form.parse(req,(err,body,files)=>{

        console.log(body);
        console.log(files);
        res.send({message:"Everything works"});

    })



})



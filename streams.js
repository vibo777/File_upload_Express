const express = require('express');
const fs = require('fs');

// create object of express 
const app = express();

// create a readable & writable stream 
let readStream = fs.createReadStream("./dummy.txt",{encoding:"utf-8"});
let writeStream = fs.createWriteStream("./write_data.txt");

readStream.on("data",(chunk)=>{

    console.log(chunk);

    console.log("chunck arrived");

})

app.get("/getdata",(req,res)=>{

    readStream.on("data",(chunk)=>{
        console.log("chunck Arrived");
        res.send(chunck);
    })

})

app.listen(3000);

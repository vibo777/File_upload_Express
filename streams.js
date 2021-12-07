const express = require('express');
const fs = require('fs');

// create object of express 
const app = express();

// create a readable & writable stream 
let readStream = fs.createReadStream("./dummy.txt",{encoding:"utf-8"});
let writeStream = fs.createWriteStream("./write_data.txt");

// readStream.on("data",(chunk)=>{

//     console.log(chunk);

//     writeStream.write(chunk);

// })

// now to connect readstream & write sterma we will use pipes
// we simply connecting two streams here 
// readStream.pipe(writeStream);

// endpoint : this endppint send data chunk by chunk 
app.get("/getdata",async (req,res)=>{

    let data = "";

    await readStream.on("data",(chunk)=>{
        console.log("chunck Arrived");
        data+=chunk;   
    })

    readStream.on("end",()=>{

        res.send(data);

    })
    

})

app.listen(3000);



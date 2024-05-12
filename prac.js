const express=require("express")
const fs=require("fs")
const app=express()
app.get('/',(req,res)=>{
    const log = `${Date.now()}: ${req.url} New Request Received\n}`
    fs.appendFile("log.txt", log, (err, data) => {
        
    
    res.send("you re on the server!")
    })
})
app.listen(8000,()=>{
    console.log("server is running")
})
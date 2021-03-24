const express = require("express");
const app = express();
const port = 3000;

app.listen(port,()=>{
    console.log(`Your Application is running on port number ${port}`);
})

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.get("/get",(req,res)=>{
    res.send("Get Call is Working");
})

app.post("/post",(req,res)=>{ 
    res.send("Post Call is Working");
})

app.put("/put",(req,res)=>{
    res.send("Put Call is Working");
})
app.delete("/delete",(req,res)=>{
    res.send("Delete Call is Working");
})
const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());
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

app.post("/databody",(req,res)=>{
    console.log(req.body);
    res.send(req.body);
})

app.post("/dataparams/:name/:city",(req,res)=>{
    console.log(req.params);
    res.send(req.params);
})

app.post("/dataquery",(req,res)=>{
    console.log(req.query);
    res.send(req.query);
})
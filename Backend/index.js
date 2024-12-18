const express = require("express")

const app = express()

var fname = ["Apple"]

app.get("/fruit",function(req,res)
{
    console.log(req.query.fruitname)
    console.log(fname.push(req.query.fruitname))
    console.log(fname)
    res.send("Fruitname added... List here : " + fname)
})

app.listen(5000,function()
{
    console.log("Server Started...")
})

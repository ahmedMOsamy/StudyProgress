const express = require("express")
const app = express()
app.use=(express.json())
app.get("/hello",(req,res)=>{
 res.send("hello")
})
app.get("/",(req,res)=>{
    res.send("first page")
   })
   app.get("/hi",(req,res)=>{
    res.send("hi")
   })
app.get("/number",(req,res)=>{
    let number=""
    for (let i = 0; i <=100; i++) {
         number += i+" -";
    }
    res.send(`the numbers are : ${number}`)
   })
   app.get("/param/:num1/:num2",(req,res)=>{
console.log(req.params);
const num1 = req.params.num1;
const num2 = req.params.num2;
const sumNums = parseInt(num1)+parseInt(num2)
res.send(`${sumNums}`)
   });

   app.get("/bodyparam",(req,res)=>{
    console.log(req.body);
    console.log(req.query);
    res.send(`hello ${req.body.name}, your age is${req.query.age}`);
   })

   app.post("/test",(req,res)=>{
    res.send("test")
   })
app.listen(3000,()=>{
    console.log("hello ahmed");
}
)
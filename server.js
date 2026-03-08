const express = require("express")
const fs = require("fs")
const path = require("path")

const app = express()

app.use(express.json())
app.use(express.static("public"))

const DB_FILE = "data.json"

function readData(){
  return JSON.parse(fs.readFileSync(DB_FILE))
}

function writeData(data){
  fs.writeFileSync(DB_FILE, JSON.stringify(data,null,2))
}

app.get("/data",(req,res)=>{
  res.json(readData())
})

app.post("/save",(req,res)=>{
  writeData(req.body)
  res.json({status:"saved"})
})

app.listen(3000,()=>{
  console.log("Server running on http://localhost:3000")
})

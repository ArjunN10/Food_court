
const express=require("express")
const app=express()
const mongoose=require("mongoose")

const cors=require("cors")
const DataBase=require("./db")
const morgan=require("morgan")
const menuRoute=require("./src/routes/MenuRoute")

require("dotenv").config()
const port=process.env.PORT

app.use(cors())
app.use(express.json())
app.use(morgan('dev'));


app.use("/api/category",menuRoute)


app.listen(port,()=>{
    console.log(`Server is connected to Port ${port}`);
})

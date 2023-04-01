import  express  from "express";
import connection from "./database/db.js";
import dotenv from 'dotenv'


dotenv.config();
const app=express();

const PORT =8000;
app.listen(PORT,()=>{
console.log(`Server is ronning  On port ${PORT}`)

})

const  USERNAME=process.env.DB_USERNAME;
const  PASSWORD=process.env.DB_PASSWORD;
connection(USERNAME,PASSWORD);
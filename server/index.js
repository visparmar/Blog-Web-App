import  express  from "express";
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cors from 'cors';

import connection from "./database/db.js";
import  Router  from "./routes/routes.js";

dotenv.config();
const app=express();

app.use(cors());

app.use (bodyParser.json({extended:true}))
app.use (bodyParser.urlencoded({extended:true}))
app.use('/', Router)

const PORT =8000;
app.listen(PORT,()=>{
console.log(`Server is ronning  On port ${PORT}`)

})

const  USERNAME=process.env.DB_USERNAME;
const  PASSWORD=process.env.DB_PASSWORD;
connection(USERNAME,PASSWORD);
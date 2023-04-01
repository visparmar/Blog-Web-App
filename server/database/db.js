import mongoose from "mongoose";


const connection =  async (username,password) => {
    const URL = `mongodb://${username}:${password}@ac-uih4gis-shard-00-00.dkvcts8.mongodb.net:27017,ac-uih4gis-shard-00-01.dkvcts8.mongodb.net:27017,ac-uih4gis-shard-00-02.dkvcts8.mongodb.net:27017/?ssl=true&replicaSet=atlas-9yygsb-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
       await mongoose.connect(URL,{
            useNewUrlParser: true
        })
        console.log("database connected successfully");
    } catch (error) {
        console.log("Error while connecting with the databse",error)
    }
}
export default connection;
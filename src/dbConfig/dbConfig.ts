import mongoose from 'mongoose';
import error from 'next/error';

export default async function Connect(){
    try{
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("MongoDB connected successfully")
        })
        connection.on("error", () => {
            console.log("MongoDB connection error. Please make sure MongoBDB is running" + error)
            process.exit()
        })
    }
    catch(error){
        console.log("something went wrong")
        console.error(error)
    }
}
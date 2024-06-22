import mongoose from "mongoose";
export const dbConnction= mongoose.connect('mongodb://localhost:27017/bookStore').then(()=>{
    console.log("DB is connecting")
})
import mongoose, { Schema, model } from "mongoose";

const schema =new Schema ({
    title :{
        type :String ,
        required :true
    },
    content :{
        type : String,
        required:true
    },
    author :{
        type :String,
        required :true
    }
},{
     timestamps:{
        createdAt:"publishedDate",
        updatedAt:false
     },
     versionKey:false
    
   
})
export const Book = model('Book',schema)
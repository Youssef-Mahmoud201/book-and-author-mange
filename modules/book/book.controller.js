import { Book } from "../../DB/models/book.model.js"

const addBook= async(req,res)=>{
    let book=await Book.insertMany(req.body)
    res.status(201).json({message:"the new book is",book})
}
const getAllbook= async(req,res)=>{
    let books = await Book.find();
    if(books==null) return res.json({message:"not found"})
    res.status(201).json({message:"all books are",books})    
}
const getBook = async(req,res)=>{
    let book=await Book.findById(req.params.id)
    if(book==null) return res.status(401).json({message:"not found"});
    res.status(201).json({message:"the book is",book})
}
const deleteBook =async(req,res)=>{
    let book =await Book.findByIdAndDelete(req.params.id)
    if(book==null) return res.status(401).json({message:"not found"});
    res.status(201).json({message:"the deleted book is",book})
}
const updateBook=async (req,res)=>{
    let book =await Book.findByIdAndUpdate(req.params.id,req.body,{new:true})
    if(book==null) return res.status(401).json({message:"not found"});
    res.status(201).json({message:"the updated book is",book})

}
const getBookBySearch= async(req,res)=>{
    let books = await Book.find(
        {
            "$or":[
                {author:{$regex:req.params.key}},
                {title:{$regex:req.params.key}}
            ]
        }
       
    )
    if(books==null) return res.status(401).json({message:"no author"})
     res.status(201).json({message:"all books are",books})   

}
export{
    addBook,
    updateBook,
    getAllbook,
    getBook,
    deleteBook,
    getBookBySearch
}

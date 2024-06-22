import { Author } from "../../DB/models/author.model.js"

const addAouthor =async(req,res)=>{
    let author=await Author.insertMany(req.body)
    res.status(200).json({message:"new author",author})
}
const getAllAuthor =async(req,res)=>{
    let authors = await Author.find();
    if(authors==null) return res.status(401).json({message:"no author"})
     res.status(201).json({message:"all Authors are",authors})   
}
const getAuthorBySearch =async(req,res)=>{
    let authors = await Author.find(
        {
            "$or":[
                {name:{$regex:req.params.key}},
                {bio:{$regex:req.params.key}}
            ]
        }
       
    )
    if(authors==null) return res.status(401).json({message:"no author"})
     res.status(201).json({message:"all Authors are",authors})   
}

const deleteAuthor = async(req,res)=>{
    let author = await Author.findByIdAndDelete(req.params.id)
    if(author== null) return res.status(401).json({message:"not exist"});
 res.status(201).json({message:"the deleted author is",author})
}
const updateAuthor =async(req,res)=>{
    let author =await Author.findByIdAndUpdate(req.params.id,req.body,{new:true})
    if(author==null) return res.status(401).json({message:"not found!"})
    res.status(201).json({message:"the updated author is",author})

}
const getAuthorAndHisBooks =async(req,res)=>{
    let author =await Author.findById(req.params.id).populate('hisBooks','title');
    if(author==null) return res.status(401).json({message:"not found"})
    res.status(201).json({message:"the author is",author})   
}
export{
    addAouthor,
    getAllAuthor,
    deleteAuthor,
    updateAuthor,
    getAuthorAndHisBooks,
    getAuthorBySearch


}

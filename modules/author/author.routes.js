import { Router } from "express";
import { addAouthor, deleteAuthor,  getAllAuthor,   getAuthorAndHisBooks,  getAuthorBySearch,  updateAuthor } from "./author.controller.js";

const authorRouter =Router()
authorRouter.post('/',addAouthor)
authorRouter.get('/',getAllAuthor)
authorRouter.get('/:id',getAuthorAndHisBooks)
authorRouter.put('/:id',updateAuthor)
authorRouter.delete('/:id',deleteAuthor)
authorRouter.get('/:key',getAuthorBySearch)


export default authorRouter;
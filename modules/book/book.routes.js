import { Router } from "express";
import { addBook, deleteBook, getAllbook, getBook, getBookBySearch, updateBook } from "./book.controller.js";

const bookRouter =Router()
bookRouter.get('/',getAllbook)
bookRouter.get('/:id',getBook)
bookRouter.get('/:key',getBookBySearch)
bookRouter.post('/',addBook)
bookRouter.delete('/:id',deleteBook)
bookRouter.put('/:id',updateBook)

export default bookRouter;

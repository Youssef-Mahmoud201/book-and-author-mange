import express from "express"
import mongoose from "mongoose"
import { Book } from "./DB/models/book.model.js"
import { dbConnction } from "./DB/DBconnection.js"
import authorRouter from "./modules/author/author.routes.js"
import bookRouter from "./modules/book/book.routes.js"
const app =express()
const port =3000
app.use(express.json())
app.use('/author',authorRouter)
app.use('/book',bookRouter)
app.get('/',(req,res)=>res.send('hallo wrold!'))
app.listen(port,()=>console.log(` example app listening on port ${port}!`))
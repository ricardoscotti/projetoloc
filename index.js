//import { express } from "express";

const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3334
import EventoController from './src/controllers/EventoController'
import "./database"

mongoose.connect("mongodb://localhost:27017/Carro")
  .then(()=> {
    console.log("deu certo")
  }) 
  .catch((error)=>{
    console.log("deu errado")
  })
app.use(express.json())

app.get('/eventos', EventoController.index);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

























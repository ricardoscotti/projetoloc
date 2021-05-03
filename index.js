//import { express } from "express";

const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3334
const carroController = require('./carroController')
import "./database"

mongoose.connect("mongodb://localhost:27017/Carro")
  .then(()=> {
    console.log("deu certo")
  }) 
  .catch((error)=>{
    console.log("deu errado")
  })
app.use(express.json())
app.get('/minhacasa', carroController.index) 
app.get('/restaurante', carroController.index)

app.post('/minhacasa', carroController.store)

app.post('/restaurante', carroController.store)

app.delete('/carros/:modelo',carroController.delete)

app.put('/carros/:modelo',carroController.update)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


























//import { express } from "express";

const express = require('express')
const app = express()
const port = 3334
import EventoController from './src/controllers/EventoController'
import "./src/database/database"

app.use(express.json())

app.get('/eventos', EventoController.index);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 

























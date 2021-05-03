const carroschema = require('./carroschema')
import Aluno from "./AlunoModel"

class carroController {
    async store(req,res){
    carroschema.create(req.body)
    .then((result)=>{
      console.log(result)
      console.log("then")
      return res.json(result)
    })
    .catch((error)=>{
      console.log("catch")
      return res.json({"mensagem": "Não funcionou!"+error})
    })
  };
  async index(req, res){
    const cesar = await Aluno.findAll()
    res.json(cesar)
    carroschema.find({})
    .then((result)=>{
      console.log(result)
      return res.json(result)
    })
    .catch((error)=>{
      return res.json({"mensagem": "Não funcionou!"})
    })
  }


async update(req,res){
    carroschema.findOneAndUpdate({"modelo": req.params.modelo}, req.body)
    .then((result)=>{
      console.log(result)
      return res.json(result)
    })
    .catch((error)=>{
      console.log(error)
      return res.json({"mensagem": "Não funcionou!"})
    })
  }

async delete(req,res){
    carroschema.find({"modelo": req.params.modelo})
    .then((result)=>{
      if (result){
        carroschema.deleteOne({"modelo": req.params.modelo})
        .catch((error)=>{
          console.log(error)
        })
      }
      console.log(result)
      return res.json(result)
    })
    .catch((error)=>{
      console.log(error)
      return res.json({"mensagem": "Não deletou!"})
    })
  }
}

module.exports = new carroController();
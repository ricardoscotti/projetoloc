import sequelize from "sequelize";
import Turma from "./TurmaModel"
import Aluno from "./AlunoModel"

const models = [Aluno, Turma]

class DataBase {
    constructor(){
        this.mySQL() 
    }

    mySQL(){
        this.connection = new sequelize({"dialect": "postgres", "host": "localhost", "username": "postgres", "password": "postgres", "database": "CURSO_SENAI", define: { timestamp: false, underscored: false, underscoredAll: false}})

        models.map(model => model.init(this.connection)).map(model => model.associate && model.associate(this.connection.models))
    }
}
export default new DataBase()  
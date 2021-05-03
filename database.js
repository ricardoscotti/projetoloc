import sequelize from "sequelize";
import Turma from "./TurmaModel"
import Aluno from "./AlunoModel"

class DataBase {
    constructor(){
        this.mySQL() 
    }

    mySQL(){
        this.connection = new sequelize({"dialect": "mysql", "host": "localhost", "username": "aluno", "password": "Sen@i2020", "database": "DBALUNO"})
        console.log(this.connection)
        //this.connection.models = Aluno.init(this.connection)
        Aluno.init(this.connection)
        console.log(this.connection)
        Turma.init(this.connection)
        Turma.associate(this.connection.models) 
    }
}
export default new DataBase()  
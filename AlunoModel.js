import Sequelize, { Model } from "sequelize";

class Aluno extends Model{
    
    static init(sequelize) {
        super.init({"IDALUNO": {type:Sequelize.SMALLINT, primarykey: true}, "NOME": Sequelize.STRING},{sequelize, freezeTableName: true, tableName: 'ALUNO', timestamps: false})
        this.removeAttribute("id")
        
             return this
            }
}

export default Aluno;

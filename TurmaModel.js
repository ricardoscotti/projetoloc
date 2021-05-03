import Sequelize, { Model } from "sequelize";

class Turma extends Model{
    
    static init(sequelize) {
        super.init({"IDTURMA": {type:Sequelize.SMALLINT, primarykey: true}, "NOMETURMA": Sequelize.STRING},{sequelize, freezeTableName: true, tableName: 'TURMA', timestamps: false})
        this.removeAttribute("id")
        
             return this
    }
    static associate(model){
        console.log(model)
        this.hasOne(model.Aluno, {foreignKey: 'IDALUNO', allowNull: false})  
    }

}

export default Turma;

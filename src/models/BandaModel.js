import Sequelize, { Model } from "sequelize";

class Banda extends Model{
    
    static init(sequelize) {
        super.init({
            "IDBANDA": {
                type:Sequelize.SMALLINT, 
                primarykey: true
            }, 
            "NOME_BANDA": Sequelize.STRING
        },{
            sequelize, 
            underscored: false, 
            freezeTableName: true, 
            tableName: 'ESTABELECIMENTO', 
            timestamps: false
        })
        this.removeAttribute("id")
        
        return this
    }

    static associate(model){
        this.hasMany(model.Evento);
    }
}

export default Banda;

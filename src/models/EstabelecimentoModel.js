import Sequelize, { Model } from "sequelize";

class Estabelecimento extends Model{
    
    static init(sequelize) {
        super.init({
            "IDESTABELECIMENTO": {
                type:Sequelize.SMALLINT, 
                primarykey: true
            }, 
            "RAZAO_SOCIAL": Sequelize.STRING
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

export default Estabelecimento;

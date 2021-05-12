import Sequelize, { Model } from "sequelize";

class Estabelecimento extends Model{
    
    static init(sequelize) {
        super.init({
            "idestabelecimento": {
                type:Sequelize.SMALLINT, 
                primarykey: true
            }, 
            "razao_social": Sequelize.STRING
        },{
            sequelize, 
            underscored: false, 
            freezeTableName: true, 
            tableName: 'estabelecimento', 
            timestamps: false
        })
        this.removeAttribute("id")
        
        return this
    }
    
    // static associate(model){
    //     this.hasMany(model.Evento);
    // }

}

export default Estabelecimento;

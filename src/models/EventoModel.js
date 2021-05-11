import Sequelize, { Model } from "sequelize";

class Evento extends Model{
    
    static init(sequelize) {
        super.init({
            "IDEVENTO": {
                type:Sequelize.SMALLINT, 
                primarykey: true
            }, 
            "VALOR_EVENTO": 
            Sequelize.STRING
        },{
            sequelize, 
            underscored: false, 
            freezeTableName: true, 
            tableName: 'EVENTO', 
            timestamps: false})
        this.removeAttribute("id")
        
        return this
    }
    static associate(model){
        this.belongsTo(model.Estabalecimento, {
            constraint: false, 
            foreignKey: "IDESTABELECIMENTO", 
            targetKey: "IDESTABELECIMENTO", 
            as:"estabelecimentoEvento"});
        this.belongsTo(model.Banda, {
            constraint: false, 
            foreignKey: "IDBANDA", 
            targetKey: "IDBANDA", 
            as:"bandaEvento"}); 
        
    }
 

}

export default Evento;

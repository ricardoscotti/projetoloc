import Sequelize, { Model } from "sequelize";

class Evento extends Model{
    
    static init(sequelize) {
        super.init({
            "idevento": {
                type:Sequelize.SMALLINT, 
                primarykey: true
            }, 
            "valor_evento": 
            Sequelize.STRING
        },{
            sequelize, 
            underscored: false, 
            freezeTableName: true, 
            tableName: 'evento', 
            timestamps: false})
        this.removeAttribute("id")
        
        return this
    }
    static associate(model){
        console.log(model)
        this.belongsTo(model.Estabelecimento, {
            constraint: false, 
            foreignKey: "idestabelecimento", 
            targetKey: "idestabelecimento", 
            as:"estabelecimentoEvento"});
        this.belongsTo(model.Banda, {
            constraint: false, 
            foreignKey: "idbanda", 
            targetKey: "idbanda", 
            as:"bandaEvento"});    
    }
 
}

export default Evento;

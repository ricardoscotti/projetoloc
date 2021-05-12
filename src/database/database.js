import Sequelize from "sequelize";
import Evento from '../models/EventoModel';
import Banda from '../models/BandaModel';
import Estabelecimento from '../models/EstabelecimentoModel';


const models = [Evento, Banda, Estabelecimento]

class DataBase {
    constructor(){
        this.mySQL() 
    }

    mySQL(){
        this.connection = new Sequelize({"dialect": "postgres", "host": "localhost", "port": '5433', "username": "postgres", "password": "Naotenho1senha", 'database':'dbLetItMusic', define: { timestamp: false, underscored: false, underscoredAll: false}})

        models.map(model => model.init(this.connection)).map(model => model.associate && model.associate(this.connection.models))
    }
}
export default new DataBase()  
const mongoose = require('mongoose')
const carroschema = new mongoose.Schema({
    latitude:{
        type: Number
    },
    longitude:{
        type: Number
    },
    latitudeDelta:{
        type: Number
    },
    longitudeDelta:{
        type: Number
    }

});

module.exports = new mongoose.model("Carros", carroschema, "Carros");
var mongoose = require('mongoose');

module.exports = mongoose.Schema({
    user_id: String,
    exam_id: String,
    correct_percent: Number,
    ended: Boolean,
    current_id: Number,
    current_order: Number,
    valutazione_6: String,
    valutazione_5: Number,
    valutazione_4: Number,
    valutazione_3: Number,
    valutazione_2: Number,
    valutazione_1: Number,
    concluso_il: Date ,
    user:{
        name: String,
        nome: String,
        cognome: String,
        codice_fiscale: String,
        farmacia: String
    }

});


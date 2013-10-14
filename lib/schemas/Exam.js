var mongoose = require('mongoose');

module.exports = mongoose.Schema({
    id: Number,
    target: String,
    finality: String,
    title: String,
    description: String,
    closed: Boolean,
    data_inizio: Date,
    data_fine: Date,
    punti: Number,
    codice: String,
    durata_ore: Number,
    originalManualFilename: String,
    actualManualFilename: String,
    questions:[
        {
            id: Number,
            progr: Number,
            text: String,
            answer_1: String,
            answer_2: String,
            answer_3: String,
            correct_answer: Number,
            answer_4: String,
            group: String
        }
    ]
});


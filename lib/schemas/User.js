var mongoose = require('mongoose');
var codiceFiscale = require("../validation/codiceFiscale");
var strings = require("../validation/stringsValidators");

module.exports = mongoose.Schema({
    name: { type: String, required: true },
    nome: {
        type: String,
        required: true,
        validate: strings.maxLength(100)
    },
    password: { type: String, required: true },
    email: { type: String, required: true },
    confirmed: Boolean,
    admin: Boolean,
    codice_fiscale: {
        type: String,
        required: true ,
        validate: codiceFiscale
    },
    prof_dip: {
        type: String,
        required: true,
        validate:strings.maxLength(1)
    },
    professione: { type: String, required: true },
    sponsor: String,
    disciplina: { type: String, required: true },
    luogo_nascita: { type: String, required: true },
    data_nascita: { type: String, required: true },
    cognome: { type: String, required: true },
    farmacia: String,
    staff: Boolean,
    conteggio_ore: Boolean
});


var mongoose = require('mongoose');

module.exports = mongoose.Schema({
    name: { type: String, required: true },
    nome: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    confirmed: Boolean,
    admin: Boolean,
    codice_fiscale: { type: String, required: true },
    prof_dip: String,
    professione: String,
    sponsor: String,
    disciplina: String,
    luogo_nascita: String,
    data_nascita: String,
    cognome: { type: String, required: true },
    farmacia: String,
    staff: Boolean,
    conteggio_ore: Boolean
});


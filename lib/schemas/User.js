var mongoose = require('mongoose');

module.exports = mongoose.Schema({
    name: String,
    nome: String,
    password: String,
    email: String,
    confirmed: Boolean,
    admin: Boolean,
    codice_fiscale: String,
    prof_dip: String,
    professione: String,
    sponsor: String,
    disciplina: String,
    luogo_nascita: String,
    data_nascita: String,
    cognome: String,
    farmacia: String,
    staff: Boolean,
    conteggio_ore: Boolean
});


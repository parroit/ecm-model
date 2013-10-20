/*
 * ecm-model
 * https://github.com/parroit/ecm-model
 *
 * Copyright (c) 2013 parroit
 * Licensed under the MIT license.
 */

'use strict';
var mongoose = require('mongoose');
var userSchema = require("./schemas/User");
var examSchema = require("./schemas/Exam");
var takenExamSchema = require("./schemas/TakenExam");
var takenQuestionSchema = require("./schemas/TakenQuestion");

module.exports = {

    schemas: {
        user: userSchema,
        exam: examSchema,
        takenExam: takenExamSchema,
        takenQuestion: takenQuestionSchema
    },
    models: {
        User : mongoose.model('User', userSchema),
        Exam : mongoose.model('Exam', examSchema),
        TakenExam : mongoose.model('TakenExam', takenExamSchema),
        TakenQuestion : mongoose.model('TakenQuestion', takenQuestionSchema),
        helpers: {
            categorie: require("./helpers/categorie"),
            professioni: require("./helpers/professioni"),
            discipline: require("./helpers/discipline")

        }
    },
    connect: function(uri,onReady){
        mongoose.connect(uri);
        var mongo = mongoose.connection;
        mongo.on('error', console.error.bind(console, 'connection to mongodb error:'));
        mongo.once('open', function(){
            onReady && onReady(module.exports.schemas,module.exports.models);
        });
    }
};
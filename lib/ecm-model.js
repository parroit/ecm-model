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

module.exports = {
    schemas: {
        user: userSchema,
        exam: examSchema
    },
    models: {
        User : mongoose.model('User', userSchema),
        Exam : mongoose.model('Exam', examSchema)
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
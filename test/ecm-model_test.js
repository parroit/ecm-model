'use strict';

var ecm_model = require('../lib/ecm-model.js');

var expect = require('chai').expect;

var path = require('path');
var _ = require('lodash');

require('chai').should();


describe('messageParser', function () {
    describe("module", function () {
        it("should load", function () {
            expect(ecm_model).not.to.be.equal(null);
            expect(ecm_model).to.be.a('object');

        });
    });

    describe("schemas", function () {
        describe("user", function () {
            it("is defined",function(){
                var schema = ecm_model.schemas.user;
                expect(schema).not.to.be.equal(null);
                expect(schema).to.be.a('object');
            });
        });

        describe("exam", function () {
            it("is defined",function(){
                var schema = ecm_model.schemas.exam;
                expect(schema).not.to.be.equal(null);
                expect(schema).to.be.a('object');
            });
        });
        describe("takenExam", function () {
            it("is defined",function(){
                var schema = ecm_model.schemas.takenExam;
                expect(schema).not.to.be.equal(null);
                expect(schema).to.be.a('object');
            });
        });
        describe("takenQuestion", function () {
            it("is defined",function(){
                var schema = ecm_model.schemas.takenQuestion;
                expect(schema).not.to.be.equal(null);
                expect(schema).to.be.a('object');
            });
        });
    });

    describe("models", function () {
        describe("User", function () {
            var model = ecm_model.models.User;
            var User = model;
            var testData={
                name: "parroit",
                nome: "Andrea",
                password: "cirbiribi",
                email: "parroit@ebansoft.com",
                confirmed: true,
                admin: false,
                codice_fiscale: "PRDNDR76A03D969Q",
                prof_dip: "P",
                professione: "17",
                sponsor: "noone",
                disciplina: "13",
                luogo_nascita: "Genova",
                data_nascita: "1976-03-01",
                cognome: "Parodi",
                farmacia: "Nessuna",
                staff: true,
                conteggio_ore: false
            };

            it("is defined",function(){

                expect(model).not.to.be.equal(null);
                expect(model).to.be.a('function');
            });

            function itRequire(field){
                it("it requires "+field,function(done){
                    var source = {};
                    source[field]=undefined;
                    var u = new User(_.extend({},testData, source));

                    u.validate(function(err){
                        //console.dir(err.errors.name);
                        expect(err.errors[field].type).to.be.equal("required");
                        done();
                    });

                });
            }

            itRequire("name");
            itRequire("nome");
            itRequire("cognome");
            itRequire("password");
            itRequire("email");
            itRequire("codice_fiscale");
            itRequire("prof_dip");
            itRequire("professione");
            itRequire("disciplina");
            itRequire("luogo_nascita");
            itRequire("data_nascita");

            it("it requires valid tax code",function(done){
                var u = new User(_.extend({},testData, {codice_fiscale:"PRDNDR76A03D969Y"}));

                u.validate(function(err){
                    //console.dir(err.errors.codice_fiscale);
                    expect(err.errors.codice_fiscale.type).to.be.equal("cf_uncorrect");
                    done();
                });

            });

            it("it accept valid tax code",function(done){
                var u = new User(_.extend({},testData, {codice_fiscale:"PRDNDR76A03D969Q"}));

                u.validate(function(err){
                    expect(err).to.be.undefined;
                    done();
                });

            });

            it("it require prof_dip max 1 char",function(done){
                var u = new User(_.extend({},testData, {prof_dip:"PA"}));

                u.validate(function(err){
                    expect(err.errors.prof_dip.type).to.be.equal("!'max %s', 1");
                    done();
                });

            });

            it("it require prof_dip in accepted values",function(done){
                var u = new User(_.extend({},testData, {prof_dip:"R"}));

                u.validate(function(err){
                   //console.dir(err.errors.prof_dip);
                    expect(err.errors.prof_dip.type).to.be.equal("!'accept one of %s', 'Libero professionista,Dipendente,Convenzionato,Privo di occupazione'");
                    done();
                });

            });

            it("it require professione in accepted values",function(done){
                var u = new User(_.extend({},testData, {professione:"999"}));

                u.validate(function(err){
                    //console.dir(err.errors.prof_dip);
                    expect(err.errors.professione.type).to.be.equal("!'accept one of %s', '"+ _.values(require("../lib/helpers/professioni"))+"'");
                    done();
                });

            });
        });
        describe("Exam", function () {
            it("is defined",function(){
                var model = ecm_model.models.Exam;
                expect(model).not.to.be.equal(null);
                expect(model).to.be.a('function');
            });
        });
        describe("TakenExam", function () {
            it("is defined",function(){
                var model = ecm_model.models.TakenExam;
                expect(model).not.to.be.equal(null);
                expect(model).to.be.a('function');
            });
        });
        describe("TakenQuestion", function () {
            it("is defined",function(){
                var model = ecm_model.models.TakenQuestion;
                expect(model).not.to.be.equal(null);
                expect(model).to.be.a('function');
            });
        });
    });

    describe("connect", function () {
        it("call callback when ready",function(done){
            ecm_model.connect('mongodb://localhost/ecm',function(schemas,models){
                expect(schemas).not.to.be.equal(null);
                expect(schemas).to.be.a('object');
                expect(models).not.to.be.equal(null);
                expect(models).to.be.a('object');
                done();
            });

        });

    });
});
'use strict';

var ecm_model = require('../lib/ecm-model.js');

var expect = require('chai').expect;

var path = require('path');

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
    });

    describe("models", function () {
        describe("User", function () {
            it("is defined",function(){
                var model = ecm_model.models.User;
                expect(model).not.to.be.equal(null);
                expect(model).to.be.a('function');
            });
        });
        describe("Exam", function () {
            it("is defined",function(){
                var model = ecm_model.models.Exam;
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
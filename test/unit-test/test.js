const request = require('supertest');
const express = require('express');

 
describe('GET /owner', function() {
    it('respond with json', function(done) {
      request(app)
        .get('/owner')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});
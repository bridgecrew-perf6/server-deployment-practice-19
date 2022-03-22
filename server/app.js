'use strict'

// a framework for responding to HTTP requests
const express = require('express'); // needs to be npm installed first.

// there cna only be one singleton
const app = express(); // Creates first 'singleton'

//path and express function
app.get('/hello', (request, response, next) => {
  response.send('Hello World');
});

module.exports = app;

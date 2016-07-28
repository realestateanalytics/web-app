var app = require('angular').module('app');

app.factory('property', ['$http', require('./property/property')]);
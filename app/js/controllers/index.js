var app = require('angular').module('app');

app.controller('HomeCtrl', ['$scope', require('./home/HomeCtrl')]);
app.controller('PropertyCtrl', ['$scope', '$stateParams', require('./property/PropertyCtrl')]);
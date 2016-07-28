require('angular');
require('angular-ui-router');

var requires = [
  'ui.router',
  'templates'
];

window.app = angular.module('app', requires);

require('./templates');
require('./services');
require('./controllers');

var config = require('./config');
var run = require('./run');

app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', config]);
angular.module('app').run(['$rootScope', run]);

angular.bootstrap(document, ['app'], {
  strictDi: true
});
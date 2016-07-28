module.exports = function($stateProvider, $urlRouterProvider, $httpProvider) {

  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];

  $urlRouterProvider.otherwise("/");

  $stateProvider
  .state('PropertyDetails', {
    url: '/property/:mls_id',
    params: {
      mls_id: null
    },
    controller: 'PropertyCtrl as property',
    templateUrl: 'property/property.html',
    title: 'Property Details'
  })
  .state('Home', {
    url: '/',
    controller: 'HomeCtrl as home',
    templateUrl: 'home.html',
    title: 'Home'
  });
};
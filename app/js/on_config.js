function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $compileProvider) {
  'ngInject';

  if (process.env.NODE_ENV === 'production') {
    $compileProvider.debugInfoEnabled(false);
  }

  $locationProvider.html5Mode(true);

  $stateProvider
  .state('Home', {
    url: '/',
    controller: 'HomeCtrl as home',
    templateUrl: 'home.html',
    title: 'Home'
  })
  .state('SeachResults', {
    url: '/search',
    params: {
      query: null
    },
    controller: 'SearchResultsCtrl as searchResults',
    templateUrl: 'search.html',
    title: 'Search Results'
  });

  $urlRouterProvider.otherwise('/');

}

export default OnConfig;

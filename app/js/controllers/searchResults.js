function SearchResultsCtrl($stateParams) {
  'ngInject';
  // ViewModel
  const vm = this;

  vm.title = 'Search Results';
  vm.query = $stateParams.query;
}

export default {
  name: 'SearchResultsCtrl',
  fn: SearchResultsCtrl
};

module.exports = function($http) {
  var getPropertyDetails = function(mls_id) {
    return $http.get('http://re-web-api.azurewebsites.net/api/listing_detail/' + mls_id)
      .then(
        function (response) {
          return response.data;
        });
  };

  return {
    getPropertyDetails: getPropertyDetails
  };
};
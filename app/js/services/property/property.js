module.exports = function($http) {
  var getPropertyDetails = function(mls_id) {
    console.log('http://localhost:3005/api/listing_detail/' + mls_id);
    return $http.get('http://localhost:3005/api/listing_detail/' + mls_id)
      .then(
        function (response) {
          return response.data;
        });
  };

  return {
    getPropertyDetails: getPropertyDetails
  };
};
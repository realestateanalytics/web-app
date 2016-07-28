module.exports = function($scope, $stateParams, property) {
  var vm = $scope;

  vm.title = 'Property Details';

  vm.mls_id = $stateParams.mls_id;

  property.getPropertyDetails(vm.mls_id)
    .then(function(listing) {
      vm.listing = listing;

      vm.selectedPhoto = vm.listing.photos[0];

      vm.changePhoto = function(id) {
        vm.selectedPhoto = vm.listing.photos[id];
      };
    });

  /**vm.listing = {
    'mls_id' : 'E3406384',
    'rms' : '5',
    'bathrooms' : '3',
    'basement' : 'Full / Unfinished',
    'municipality' : 'Oshawa',
    'value' : 405500,
    'exterior' : 'Brick / Vinyl Siding',
    'a/c' : 'Central Air',
    'client_remks' : 'This Is A Beautifully Decorated And Updated 3 Bedroom Freehold Townhome. Located In North Oshawa Close To All Amenities It Is An Ideal Location For Commuters In Addition To Having Public Transportation At The Front Door.  From The Newly Landscaped Front Entranceway To The New Flooring, New Appliances, Renos To Kitchen And Bathrooms, Impressive Large Deck And Fresh Paint Throughout There Is Nothing Left But To Move In And Enjoy! Convenient Access To The Back',
    'sold_date' : '2016-02-07T00:00:00.000Z',
    'style' : '2-Storey',
    'for' : 'Sale',
    'garage' : 'Attached / 1.0',
    'fronting_on' : 'N',
    'contract_date' : '2016-02-02T00:00:00.000Z',
    'long' : '-78.87049',
    'source' : 'raw/20160209/Oshawa »/index.html',
    'dir/cross_st' : 'Ritson/Coldstream',
    'sewer' : 'Sewers',
    'listed' : 349900,
    'fam_rm' : 'N',
    'type' : 'Att/Row/Twnhouse',
    'status' : 'Sld',
    'spis' : 'N',
    'prop_feat' : 'Fenced Yard, Public Transit, School',
    'bedrooms' : '3',
    'fireplace/stv' : 'N',
    'washrooms' : '3',
    'park_spaces' : '1',
    'water' : 'Municipal',
    'photos' : [
        'http://photos.v3.torontomls.net/Live/photos/FULL/1/384/E3406384.jpg?20160202122047',
        'http://photos.v3.torontomls.net/Live/photos/FULL/2/384/E3406384_2.jpg?20160202122047',
        'http://photos.v3.torontomls.net/Live/photos/FULL/3/384/E3406384_3.jpg?20160202122047',
        'http://photos.v3.torontomls.net/Live/photos/FULL/4/384/E3406384_4.jpg?20160202122047',
        'http://photos.v3.torontomls.net/Live/photos/FULL/5/384/E3406384_5.jpg?20160202122047',
        'http://photos.v3.torontomls.net/Live/photos/FULL/6/384/E3406384_6.jpg?20160202122047',
        'http://photos.v3.torontomls.net/Live/photos/FULL/7/384/E3406384_7.jpg?20160202122047',
        'http://photos.v3.torontomls.net/Live/photos/FULL/8/384/E3406384_8.jpg?20160202122047',
        'http://photos.v3.torontomls.net/Live/photos/FULL/9/384/E3406384_9.jpg?20160202122047',
        'http://photos.v3.torontomls.net/Live/photos/FULL/10/384/E3406384_10.jpg?20160202122047',
        'http://photos.v3.torontomls.net/Live/photos/FULL/11/384/E3406384_11.jpg?20160202122047',
        'http://photos.v3.torontomls.net/Live/photos/FULL/12/384/E3406384_12.jpg?20160202122047',
        'http://photos.v3.torontomls.net/Live/photos/FULL/13/384/E3406384_13.jpg?20160202122047',
        'http://photos.v3.torontomls.net/Live/photos/FULL/14/384/E3406384_14.jpg?20160202122047',
        'http://photos.v3.torontomls.net/Live/photos/FULL/15/384/E3406384_15.jpg?20160202122047',
        'http://photos.v3.torontomls.net/Live/photos/FULL/16/384/E3406384_16.jpg?20160202122047'
    ],
    'heat' : 'Forced Air / Gas',
    'last_status' : 'Sld',
    'address' : '628 Coldstream Dr',
    'lat' : '43.94517',
    'pool' : 'None',
    'apt_num' : '',
    'spec_desig' : 'Unknown',
    'zip' : 'L1K2T6',
    'dom' : '5',
    'drive' : 'Private',
    'taxes' : '$3,573.36',
    'mls#' : 'E3406384',
    'kitchens' : '1',
    '%_dif' : '116',
    'extras' : "Yard From The Garage Don't Miss The Virtual Tour Of This Quality Home. Inclusions Stainless Steel Refrigerator, Stove, Dishwasher, Window Blinds And Egdo. Exclude Washer/Dryer, Basement Fridge, And Nursery Light Fixture"
  };
***/

};
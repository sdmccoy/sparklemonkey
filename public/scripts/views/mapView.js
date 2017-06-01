'use strict';

var app = app || {};

(function(module){

  const mapView = {};

  const f = $('form')[0];

  mapView.getLocationCoords = function(city, callback) {
    $.get(`/googlemaps/geo/${city}`)
    .then(callback);
  }

  mapView.updateMapLocation = function(cityObject) {
    let lat = cityObject.results[0].geometry.location.lat;
    let long = cityObject.results[0].geometry.location.lng;
    mapOptions.center = new google.maps.LatLng(lat, long);
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    initMap(app.Concert.all);
  }

  mapView.initPage = function() {
    if (!f.area.value && !f.startDate.value && !f.endDate.value) {
      app.generalView.setDefaults();
    }
    app.generalView.handleFilterFormSubmit();
  }

  module.mapView = mapView;
})(app);

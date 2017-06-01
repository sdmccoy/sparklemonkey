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
    let newLat = cityObject.results[0].geometry.location.lat;
    let newLng = cityObject.results[0].geometry.location.lng;
    mapOptions.center = new google.maps.LatLng(newLat, newLng)
    map.panTo({ lat: newLat, lng: newLng });
    initMap(app.Concert.all);
  }

  mapView.initPage = function() {
    if (!f.area.value && !f.startDate.value && !f.endDate.value) {
      app.generalView.setDefaults();
    }
    $('form').show();
    app.generalView.handleFilterFormSubmit();
    if (localStorage.mapStyle) {
      $('#style-selector').val(localStorage.mapStyle);
      $('#style-selector').change();
    }
  }

  module.mapView = mapView;
})(app);

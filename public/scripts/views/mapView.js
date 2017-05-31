'use strict';

var app = app || {};

(function(module){

  const mapView = {};

  const f = $('form')[0];

  mapView.initPage = function() {
    if (!f.area.value && !f.startDate.value && !f.endDate.value) {
      app.generalView.setDefaults();
    }
    app.generalView.handleFilterFormSubmit();
  }

  mapView.initMap = function(){
    const map = new google.maps.Map($('#map'), app.mapOptions);

    google.maps.event.addDomListener(window, 'resize', function() {
      var center = map.getCenter();
      google.maps.event.trigger(map, 'resize');
      map.setCenter(center);
    });

  }
  module.mapView = mapView;
})(app);

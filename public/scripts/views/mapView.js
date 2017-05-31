'use strict';

var app = app || {};

(function(module){

  const mapView = {};

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

'use strict';

var app = app || {};

(function(module){
  const mapController = {};

  mapController.index = function(ctx){
    $('.button-content').hide();
    $('#map').show();
    console.log('calling',app.Concert.all);
    app.mapView.initPage();
    if(app.Concert.all.length > 0) {
      initMap(app.Concert.all)
    }
  };
  module.mapController = mapController;
})(app);

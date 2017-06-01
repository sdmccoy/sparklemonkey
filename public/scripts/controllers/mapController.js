'use strict';

var app = app || {};

(function(module){
  const mapController = {};

  mapController.index = function(ctx){
    $('.button-content').hide();
    $('#map').show();
    app.mapView.initPage();
    if(app.Concert.all.length > 0) {
      if (ctx.params.area) {
        app.mapView.getLocationCoords(ctx.params.area, app.mapView.updateMapLocation)
      } else {
        initMap(app.Concert.all)
      }
    }
  };
  module.mapController = mapController;
})(app);

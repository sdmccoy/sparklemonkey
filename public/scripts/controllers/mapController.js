'use strict';

var app = app || {};

(function(module){
  const mapController = {};

  mapController.index = function(){
    $('.button-content').hide();
    $('#map').show();
    console.log('calling',app.Concert.all);
    app.mapView.initPage();
  };
  module.mapController = mapController;
})(app);

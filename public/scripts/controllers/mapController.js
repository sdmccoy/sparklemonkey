'use strict';

var app = app || {};

(function(module){
  const mapController = {};

  mapController.index = function(){
    $('.button-content').hide();
    $('#map').show();
  };
  module.mapController = mapController;
})(app);

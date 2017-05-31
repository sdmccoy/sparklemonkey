'use strict';

var app = app || {};

(function(module){
  const mapController = {};

  const f = $('form')[0];

  mapController.createFilter = function(ctx, next) {
    let start = ctx.params.start.split('-');
    let end = ctx.params.end.split('-');
    ctx.filter = {
      postalCode: ctx.params.area,
      startDateTime: new Date(start[0], parseInt(start[1]) - 1, start[2], 0).toISOString().replace(/\.\d\d\d/, ''),
      endDateTime: new Date(end[0], parseInt(end[1]) - 1, end[2], 23, 59).toISOString().replace(/\.\d\d\d/, ''),
      classificationName: 'Music'
    }
    console.log(ctx.filter);
    next();
  };

  mapController.index = function(){
    $('.button-content').hide();
    $('#map').show();
    app.mapView.initPage();
  };
  module.mapController = mapController;
})(app);

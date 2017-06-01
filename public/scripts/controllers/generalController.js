'use strict';

var app = app || {};

(function(module) {
  const generalController = {};

  const f = $('form')[0];

  // take the area, start, and end dates from the url to make an object for the request parameters
  generalController.createFilter = function(ctx, next) {
    let area = ctx.params.area.split(', ');
    let start = ctx.params.start.split('-');
    let end = ctx.params.end.split('-');
    ctx.filter = {
      city: area[0],
      stateCode: area[1],
      startDateTime: new Date(start[0], parseInt(start[1]) - 1, start[2], 0).toISOString().replace(/\.\d\d\d/, ''),
      endDateTime: new Date(end[0], parseInt(end[1]) - 1, end[2], 23, 59).toISOString().replace(/\.\d\d\d/, ''),
      classificationName: 'Music',
      sort: 'date,asc',
    }
    next();
  };

  // uses the filter in ctx to load concerts from the TM API
  generalController.loadFromFilter = function(ctx, next) {
    app.Concert.fetchAll(ctx.filter, next);
  }

  module.generalController = generalController;
})(app);

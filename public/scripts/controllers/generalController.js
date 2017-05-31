'use strict';

var app = app || {};

(function(module) {
  const generalController = {};

  const f = $('form')[0];

  generalController.createFilter = function(ctx, next) {
    let start = ctx.params.start.split('-');
    let end = ctx.params.end.split('-');
    ctx.filter = {
      startDateTime: new Date(start[0], parseInt(start[1]) - 1, start[2], 0).toISOString().replace(/\.\d\d\d/, ''),
      endDateTime: new Date(end[0], parseInt(end[1]) - 1, end[2], 23, 59).toISOString().replace(/\.\d\d\d/, ''),
      classificationName: 'Music'
    }
    if (parseInt(ctx.params.area)) {
      ctx.filter.postalCode = ctx.params.area;
    } else {
      ctx.filter.city = ctx.params.area;
    }
    console.log(ctx.filter);
    next();
  };

  module.generalController = generalController;
})(app);

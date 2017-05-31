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

  module.mapView = mapView;
})(app);

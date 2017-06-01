'use strict';

var app = app || {};

(function(module) {
  const aboutView = {};

  aboutView.initIndexPage = function(){
    if (!f.area.value && !f.startDate.value && !f.endDate.value) {
      app.generalView.setDefaults();
    }
    app.generalView.handleFilterFormSubmit();
  }
  module.aboutView = aboutView;
})(app);

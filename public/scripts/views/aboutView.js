'use strict';

var app = app || {};

(function(module) {
  const aboutView = {};

  const f = $('form')[0];

  aboutView.initIndexPage = function(){
    if (!f.area.value && !f.startDate.value && !f.endDate.value) {
      app.generalView.setDefaults();
    }
    app.generalView.handleFilterFormSubmit();
    $('#monkey-logo').addClass('small');
    $('form').hide();
  }
  module.aboutView = aboutView;
})(app);

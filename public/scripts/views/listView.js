'use strict';

var app = app || {};

(function(module) {
  const listView = {};
  const f = $('form')[0];
  const render = Handlebars.compile($('#list-template').html());

  listView.initIndexPage = function(){
    if (!f.area.value && !f.startDate.value && !f.endDate.value) {
      app.generalView.setDefaults();
    }
    $('form').show();
    app.generalView.handleFilterFormSubmit();
    $('#list').empty().append(app.Concert.all.map(render))
  }
  module.listView = listView;
})(app);

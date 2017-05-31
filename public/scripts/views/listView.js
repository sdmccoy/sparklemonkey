'use strict';

var app = app || {};
const f = $('form')[0];

(function(module) {
  const listView = {};
  const render = Handlebars.compile($('#list-template').html());

  listView.initIndexPage = function(){
    if (!f.area.value && !f.startDate.value && !f.endDate.value) {
      app.generalView.setDefaults();
    }
    app.generalView.handleFilterFormSubmit();
    $('#list').append(app.Concert.all.map(render))
  }
  module.listView = listView;
})(app);

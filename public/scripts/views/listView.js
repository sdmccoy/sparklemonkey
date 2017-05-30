'use strict';

var app = app || {};

(function showEvents(json) {
  const events = [];
  for(var i=0; i<json.page.size; i++) {
    json.forEach('', function(){
      $('#list').append()
    }).append("<p>"+json._embedded.events[i].name+"</p>");
  }
  json.events = events;
})(app);

'use strict';

var app = app || {};

(function(module) {

  function Concert(rawConcertObject) {
    this.name = rawConcertObject.name;
    this.id = rawConcertObject.id;
    this.url = rawConcertObject.url;
    this.date = rawConcertObject.dates.start.localDate;
    this.time = rawConcertObject.dates.start.localTime;
    this.venue = rawConcertObject._embedded.venues[0].name;
    this.venueLat = rawConcertObject._embedded.venues[0].location.latitude;
    this.venueLat = rawConcertObject._embedded.venues[0].location.longitude;
  }

  Concert.loadAll = function() {

  }

  const defaultParams = {
    apikey: tmAPIKey,
    city: 'Seattle',
    startDateTime: new Date(),
    endDateTime: new Date().setDate(new Date().getDate() + 7),
    classificationName: 'Music'
  }

  Concert.fetchAll = function(params, callback) {
    $.ajax({
      url: `https://app.ticketmaster.com/discovery/v2/events.json?${params.forEach(function(param) {
        return param[key];
      })}`
    })
  }

  module.Concert = Concert;
})(app);

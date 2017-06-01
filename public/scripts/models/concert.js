'use strict';

var app = app || {};

(function(module) {

  // creates a new Concert object with a raw event from the TicketMaster API
  function Concert(rawConcertObject) {
    this.name = rawConcertObject.name;
    this.id = rawConcertObject.id;
    this.url = rawConcertObject.url;
    this.img = rawConcertObject.images.find(function(e) { return e.ratio === '4_3'}).url,
    this.date = rawConcertObject.dates.start.localDate;
    this.time = rawConcertObject.dates.start.localTime;
    this.venue = rawConcertObject._embedded.venues[0].name;
    this.venueLat = rawConcertObject._embedded.venues[0].location ? rawConcertObject._embedded.venues[0].location.latitude : '0';
    this.venueLong = rawConcertObject._embedded.venues[0].location ? rawConcertObject._embedded.venues[0].location.longitude : '0';
  }

  // all the Concerts from the most recent TM API request
  Concert.all = [];

  // creates new Concert objects from an array of raw events and stores them in the array of all concerts
  Concert.loadAll = function(rawConcerts) {
    Concert.all = rawConcerts.map(function(concert) { return new Concert(concert); });
  };

  // takes a set of parameters then checks if new information is available. if so, get list from the TM API and put in localStorage, else take from localStorage
  Concert.fetchAll = function(params, callback) {
    params.size = 1;
    $.get('/ticketmaster/concerts', params)
    .then(function(data) {
      if (data.page.totalElements) {
        let dataId = data.page.totalElements + '-' + data._embedded.events[0].name;
        if (dataId === localStorage.dataId) {
          Concert.loadAll(JSON.parse(localStorage.rawData));
          $('#loading').hide();
          if (callback) callback();
        } else {
          params.size = 50;
          $.get('/ticketmaster/concerts', params)
          .then(function(data) {
            localStorage.dataId = dataId;
            localStorage.rawData = JSON.stringify(data._embedded.events);
            Concert.loadAll(data._embedded.events);
            $('#loading').hide();
            if (callback) callback();
          });
        }
      } else {
        $('#loading').hide();
        Concert.all = [];
        alert('No concerts found.')
        if (callback) callback();
      }
    }, function(e) { console.error(e); })
  };

  module.Concert = Concert;
})(app);

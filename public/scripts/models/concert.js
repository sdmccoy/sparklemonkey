'use strict';

var app = app || {};

(function(module) {

  function Concert(rawConcertObject) {
    this.name = rawConcertObject.name;
    this.id = rawConcertObject.id;
    this.url = rawConcertObject.url;
    this.img = rawConcertObject.images.find(function(e) { return e.ratio === '4_3'}).url,
    this.date = rawConcertObject.dates.start.localDate;
    this.time = rawConcertObject.dates.start.localTime;
    this.venue = rawConcertObject._embedded.venues[0].name;
    this.venueLat = rawConcertObject._embedded.venues[0].location.latitude;
    this.venueLong = rawConcertObject._embedded.venues[0].location.longitude;
  }

  Concert.all = [];

  Concert.loadAll = function(rawConcerts) {
    Concert.all = rawConcerts.map(function(concert) { return new Concert(concert); });
  };

  Concert.defaultParams = {
    apikey: tmAPIKey,
    city: 'Seattle',
    startDateTime: new Date(),
    endDateTime: new Date(new Date().setDate(new Date().getDate() + 7)),
    classificationName: 'Music'
  };

  Concert.fetchAll = function(params, callback) {
    let urlParamString = Object.keys(params).reduce(function(paramString, key) {
      return paramString +
      `${key}=${(typeof params[key] !== 'object' ? params[key].toString() : params[key].toISOString().replace(/\.\d\d\d/, ''))
      .replace(/\s/g, '%20').replace(/:/g, '%3A')}&`;
    }, '')
    $.ajax({
      url: `https://app.ticketmaster.com/discovery/v2/events.json?${urlParamString}size=1`,
      method: 'GET',
    })
    .then(function(data) {
      let dataId = data.page.totalElements + '-' + data._embedded.events[0].name;
      if (dataId === localStorage.dataId) {
        Concert.loadAll(JSON.parse(localStorage.rawData));
        if (callback) callback();
      } else {
        $.get(`https://app.ticketmaster.com/discovery/v2/events.json?${urlParamString}`)
        .then(function(data) {
          localStorage.dataId = dataId;
          localStorage.rawData = JSON.stringify(data._embedded.events);
          Concert.loadAll(data._embedded.events);
          if (callback) callback();
        });

      }
    }, function(e) { console.error(e); })
  };

  module.Concert = Concert;
})(app);

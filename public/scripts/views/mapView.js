'use strict';

var app = app || {};

(function(module){

  const mapView = {};

  const f = $('form')[0];

  mapView.handleFilterFormSubmit = function() {
    $('form').off('submit').on('submit', function(e) {
      console.log('submit');
      e.preventDefault();
      let path = [f.area.value, f.startDate.value, f.endDate.value].join('/');
      page.show(`/${path}`);
    })
  }

  mapView.setDefaults = function() {
    f.area.value = '98121';
    let today = new Date();
    let month = `${today.getMonth() + 1}`.length < 2 ? `0${today.getMonth() + 1}` : today.getMonth() + 1;
    let day = `${today.getDate()}`.length < 2 ? `0${today.getDate()}` : today.getDate();
    f.startDate.value = `${today.getFullYear()}-${month}-${day}`;
    let weekAway = new Date(today.setDate(today.getDate() + 7));
    month = `${weekAway.getMonth() + 1}`.length < 2 ? `0${weekAway.getMonth() + 1}` : weekAway.getMonth() + 1;
    day = `${weekAway.getDate()}`.length < 2 ? `0${weekAway.getDate()}` : weekAway.getDate();
    f.endDate.value = `${weekAway.getFullYear()}-${month}-${day}`;
  }

  mapView.initPage = function() {
    if (!f.area.value && !f.startDate.value && !f.endDate.value) {
      mapView.setDefaults();
    }
    mapView.handleFilterFormSubmit();
  }

  mapView.initMap = function(){
    const map = new google.maps.Map($('#map'), app.mapOptions);

    google.maps.event.addDomListener(window, 'resize', function() {
      var center = map.getCenter();
      google.maps.event.trigger(map, 'resize');
      map.setCenter(center);
    });

  }
  module.mapView = mapView;
})(app);

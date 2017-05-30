'use strict';

var app = app || {};

(function(module){
  const mapView = [];
  function initMap(position, json) {
    var mapSection = $('#map');
    var map = new google.maps.Map(mapSection, {
      center: {lat: position.coords.latitude, lng: position.coords.longitude},
      zoom: 10
    });
    for(var i=0; i<json.page.size; i++) {
      addMarker(map, json._embedded.events[i]);
    }
  }

  function addMarker(map, event) {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(event._embedded.venues[0].location.latitude, event._embedded.venues[0].location.longitude),
      map: map
    });
    marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
    console.log(marker);
  }
  module.newMap = newMap;
})(app);

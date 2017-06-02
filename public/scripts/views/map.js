'use strict';

//style for the map
var mapOptions = {
  zoom: 12,
  styles: '#',
  center: new google.maps.LatLng(47.618217, -122.351832),
  mapTypeId: google.maps.MapTypeId.STREET,
  zoomControl: true,
  zoomControlOptions: {
    position: google.maps.ControlPosition.RIGHT_CENTER
  }
}

// launches the map
let map = new google.maps.Map(document.getElementById('map'), mapOptions);

google.maps.event.addDomListener(window, 'resize', function() {
  var center = map.getCenter();
  google.maps.event.trigger(map, 'resize');
  map.setCenter(center);
});

var markers = [];

// start of marker clusters
function initMap(concerts) {

  let noteIcon = $('#style-selector').val() === 'dark-mode' || $('#style-selector').val() === 'night-mode' ? '/img/note-icon.png' : '/img/dark-note-icon.png';

  // trying to delete markers
  markers.forEach(function(m) { m.setMap(null); m = null; });
  // starting the spiderfier library to assist with identical location markers.
  let oms = new OverlappingMarkerSpiderfier(map, {
    markersWontMove: true,
    markersWontHide: true,
    basicFormatEvents: true
  });
  // builds the markers based on the user form input.
  markers = concerts.map(function(concert){
    let locations = {lat: parseFloat(concert.venueLat), lng: parseFloat(concert.venueLong)};
    let marker = new google.maps.Marker({
      position: locations,
      icon: noteIcon,
      animation: google.maps.Animation.DROP,
      visible: locations.lat !== 0 && locations.lng !== 0
    });
    //builds the info window when the user clicks on the location marker
    let windowContent = `<div id="window-content"><strong>Event:</strong> ${concert.name}<br><strong>Date: </strong>${concert.date}<br><strong>Time: </strong>${concert.time}<br><strong>Venue: </strong>${concert.venue}<br><strong><a href="${concert.url}" target="_blank">Click to Buy Tickets</a></strong></div>`
    let infoWindow = new google.maps.InfoWindow({
      content: windowContent
    });
    google.maps.event.addListener(marker, 'spider_click', function(e){
      infoWindow.open(map, marker);
    });
    oms.addMarker(marker);
    return marker
  });
}

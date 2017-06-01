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
var map = new google.maps.Map(document.getElementById('map'), mapOptions);

google.maps.event.addDomListener(window, 'resize', function() {
  var center = map.getCenter();
  google.maps.event.trigger(map, 'resize');
  map.setCenter(center);
});

var markers = [];

// start of marker clusters
function initMap(concerts) {
  // trying to delete markers
  markers.forEach(function(marker) { marker.setMap(null); marker = null; });

  // choose icon based on style of the map
  var noteIcon = $('#style-selector').val() === 'dark-mode' || $('#style-selector').val() === 'night-mode' ? '/img/note-icon.png' : '/img/dark-note-icon.png';

  var windowContent = concerts.map(function(concert){
    return `<div id="window-content" style="font-size:20px"><strong>Event:</strong> ${concert.name}<br><strong>Date: </strong>${concert.date}<br><strong>Time: </strong>${concert.time}<br><strong>Venue: </strong>${concert.venue}<br><strong><a href="${concert.url}" target="_blank" style="color: blue;">Click to Buy Tickets</a></strong></div>`
  });

  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given 'locations' array.
  // The map() method here has nothing to do with the Google Maps API.
  var locations = concerts.map(function(concert){
    return {lat: parseFloat(concert.venueLat), lng: parseFloat(concert.venueLong)};
  });


  markers = locations.map(function(location) {
    // console.log(locations);
    return new google.maps.Marker({
      position: location,
      map: map,
      icon: noteIcon,
      animation: google.maps.Animation.DROP,
      visible: location.lat !== 0 && location.lng !== 0
    });
  });

  // Add a marker clusterer to manage the markers.
  var markerCluster = new MarkerClusterer(map, markers,
      {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
  // This displays the info box when you click on the marker.
  markers.forEach(function(marker, index){
    var infoWindow = new google.maps.InfoWindow({
      content: windowContent[index]
    });
    marker.addListener('click', function(){
      infoWindow.open(map, marker);
    })
  });
}

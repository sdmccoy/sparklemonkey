'use strict';

//style for the map
var mapOptions = {
  zoom: 15,
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

// start of marker clusters
function initMap(concerts) {
  // Create an array of alphabetical characters used to label the markers.
  var noteIcon = $('#style-selector').val() === 'dark-mode' || $('#style-selector').val() === 'night-mode' ? '/img/note-icon.png' : '/img/dark-note-icon.png';
  var windowContent = concerts.map(function(concert){
    return `Event: ${concert.name}<br>Date: ${concert.date}<br>Time: ${concert.time}<br>Venue: ${concert.venue}<br><a href="${concert.url}" target="_blank">Buy Tickets</a>`
  });

  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given 'locations' array.
  // The map() method here has nothing to do with the Google Maps API.
  var locations = concerts.map(function(concert){
    return {lat: parseFloat(concert.venueLat), lng: parseFloat(concert.venueLong)};
  });


  var markers = locations.map(function(location) {
    return new google.maps.Marker({
      position: location,
      icon: noteIcon,
      animation: google.maps.Animation.DROP
    });
  });

  // Add a marker clusterer to manage the markers.
  var markerCluster = new MarkerClusterer(map, markers,
      {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

  markers.forEach(function(marker, index){
    var infoWindow = new google.maps.InfoWindow({
      content: windowContent[index]
    });
    marker.addListener('click', function(){
      infoWindow.open(map, marker);
    })
  });
}

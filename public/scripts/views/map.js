'use strict';

//style for the map
var mapOptions = {
  zoom: 15,
  styles: blackView,
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
  console.log(concerts);
  // Create an array of alphabetical characters used to label the markers.
  var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var noteIcon = 'http://www.kindermusik.co.za/site/wp-content/uploads/2015/12/icon-music-note-kindermusik-blue-2000x2000-2000x2000-e1448965274640.png';
  var windowContent = concerts.map(function(concert){
    console.log();
    return `Event: ${concert.name}<br>Date: ${concert.date}<br>Time: ${concert.time}<br>Venue: ${concert.venue}<br><a href="${concert.url}" target="_blank">Buy Tickets</a>`
  });

  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given 'locations' array.
  // The map() method here has nothing to do with the Google Maps API.
  var locations = concerts.map(function(concert){
    return {lat: parseFloat(concert.venueLat), lng: parseFloat(concert.venueLong)};
  });


  var markers = locations.map(function(location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
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
    marker.addListener('click', function(event){
      console.log(event);
      infoWindow.open(map, marker);
    })
  });
}
app.Concert.fetchAll(app.Concert.defaultParams, function(){
  initMap(app.Concert.all);
});

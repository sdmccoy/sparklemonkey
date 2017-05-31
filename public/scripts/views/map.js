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
  console.log('test1');
  // Create an array of alphabetical characters used to label the markers.
  // var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var noteIcon = '/img/note-icon.png';
  console.log(concerts);

  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given 'locations' array.
  // The map() method here has nothing to do with the Google Maps API.
  var locations = concerts.map(function(concert){
    console.log('test3');
    return {lat: parseFloat(concert.venueLat), lng: parseFloat(concert.venueLong)};
  });

  var markers = locations.map(function(location, i) {
    return new google.maps.Marker({
      position: location,
      // label: labels[i % labels.length],
      icon: noteIcon,
      animation: google.maps.Animation.DROP
    });
  });

  // Add a marker clusterer to manage the markers.
  var markerCluster = new MarkerClusterer(map, markers,
      {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

}
// app.Concert.fetchAll(app.Concert.defaultParams, function(){
//   initMap(app.Concert.all);
// })

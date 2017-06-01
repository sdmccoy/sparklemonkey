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
let map = new google.maps.Map(document.getElementById('map'), mapOptions);

// google.maps.event.addDomListener(window, 'resize', function() {
//   var center = map.getCenter();
//   google.maps.event.trigger(map, 'resize');
//   map.setCenter(center);
// });

// start of marker clusters
function initMap(concerts) {
  // Create an array of alphabetical characters used to label the markers.
  let noteIcon = $('#style-selector').val() === 'dark-mode' || $('#style-selector').val() === 'night-mode' ? '/img/note-icon.png' : '/img/dark-note-icon.png';
  // starting the spiderfier library to assist with identical location markers.
  let oms = new OverlappingMarkerSpiderfier(map, {
    markersWontMove: true,
    markersWontHide: true,
    basicFormatEvents: true
  });
  // builds the markers based on the user form input.
  let markers = concerts.map(function(concert){
    let locations = {lat: parseFloat(concert.venueLat), lng: parseFloat(concert.venueLong)};
    let marker = new google.maps.Marker({
      position: locations,
      icon: noteIcon,
      animation: google.maps.Animation.DROP
    });
    //builds the info window when the user clicks on the location marker
    let windowContent = `<div id="window-content" style="font-size:20px"><strong>Event:</strong> ${concert.name}<br><strong>Date: </strong>${concert.date}<br><strong>Time: </strong>${concert.time}<br><strong>Venue: </strong>${concert.venue}<br><strong><a href="${concert.url}" target="_blank" style="color: blue;">Click to Buy Tickets</a></strong></div>`
    let infoWindow = new google.maps.InfoWindow({
      content: windowContent
    });
    google.maps.event.addListener(marker, 'spider_click', function(e){
      infoWindow.open(map, marker);
    });
    oms.addMarker(marker);
  });

  // var markers = locations.map(function(location) {
  //   return new google.maps.Marker({
  //     position: location,
  //     map: map,
  //     icon: noteIcon,
  //     animation: google.maps.Animation.DROP
  //   });
  // });

  // Add a marker clusterer to manage the markers.
  let markerCluster = new MarkerClusterer(map, markers,
      {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
  // This displays the info box when you click on the marker.
  // markers.forEach(function(marker, index){
  //   var infoWindow = new google.maps.InfoWindow({
  //     content: windowContent[index]
  //   });
  //   marker.addListener('click', function(){
  //     infoWindow.open(map, marker);
  //   })
  // });
}

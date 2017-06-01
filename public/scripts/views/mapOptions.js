'use strict';

function updateMap (concerts){
  var styleSelector = $('#style-selector');
  if(styleSelector.val() === 'dark-mode'){
    mapOptions.styles = darkView;
    map.setOptions(mapOptions);
    initMap(concerts);
  } else if (styleSelector.val() === 'cb-mode'){
    mapOptions.styles = cbView;
    map.setOptions(mapOptions);
    initMap(concerts);
  } else if (styleSelector.val() === 'night-mode'){
    mapOptions.styles = nightView;
    map.setOptions(mapOptions);
    initMap(concerts);
  } else {
    mapOptions.styles = [];
    map.setOptions(mapOptions);
    initMap(concerts);
  }
}

$('#style-selector').on('change', function(){
  updateMap(app.Concert.all);
  localStorage.mapStyle = $(this).val();
})

var defaultView = [
  {
    featureType: 'all',
    stylers: [
      { hue: '#00ffe6' },
      { saturation: -20 }
    ]
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      { lightness: 100 },
      { visibility: 'simplified' }
    ]
  },
  {
    featureType: 'road',
    elementType: 'labels',
    stylers: [
      { visibility: 'off' }
    ]
  }
];

var cbView = [
  {
    'featureType': 'water',
    'elementType': 'all',
    'stylers': [
      {
        'hue': '#0072B2'
      },
      {
        'saturation': 100
      },
      {
        'lightness': -54
      },
      {
        'visibility': 'on'
      }
    ]
  },
  {
    'featureType': 'landscape',
    'elementType': 'all',
    'stylers': [
      {
        'hue': '#E69F00'
      },
      {
        'saturation': 100
      },
      {
        'lightness': -49
      },
      {
        'visibility': 'on'
      }
    ]
  },
  {
    'featureType': 'poi',
    'elementType': 'all',
    'stylers': [
      {
        'hue': '#D55E00'
      },
      {
        'saturation': 100
      },
      {
        'lightness': -46
      },
      {
        'visibility': 'on'
      }
    ]
  },
  {
    'featureType': 'road.local',
    'elementType': 'all',
    'stylers': [
      {
        'hue': '#CC79A7'
      },
      {
        'saturation': -55
      },
      {
        'lightness': -36
      },
      {
        'visibility': 'on'
      }
    ]
  },
  {
    'featureType': 'road.arterial',
    'elementType': 'all',
    'stylers': [
      {
        'hue': '#F0E442'
      },
      {
        'saturation': -15
      },
      {
        'lightness': -22
      },
      {
        'visibility': 'on'
      }
    ]
  },
  {
    'featureType': 'road.highway',
    'elementType': 'all',
    'stylers': [
      {
        'hue': '#56B4E9'
      },
      {
        'saturation': -23
      },
      {
        'lightness': -2
      },
      {
        'visibility': 'on'
      }
    ]
  },
  {
    'featureType': 'administrative',
    'elementType': 'geometry',
    'stylers': [
      {
        'hue': '#000000'
      },
      {
        'saturation': 0
      },
      {
        'lightness': -100
      },
      {
        'visibility': 'on'
      }
    ]
  },
  {
    'featureType': 'transit',
    'elementType': 'all',
    'stylers': [
      {
        'hue': '#009E73'
      },
      {
        'saturation': 100
      },
      {
        'lightness': -59
      },
      {
        'visibility': 'on'
      }
    ]
  }
];

var nightView = [
  {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
  {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
  {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}]
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}]
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{color: '#263c3f'}]
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{color: '#6b9a76'}]
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{color: '#38414e'}]
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{color: '#212a37'}]
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{color: '#9ca5b3'}]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{color: '#746855'}]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{color: '#1f2835'}]
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{color: '#f3d19c'}]
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{color: '#2f3948'}]
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}]
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{color: '#17263c'}]
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{color: '#515c6d'}]
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{color: '#17263c'}]
  }
]

var darkView = [
  {
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#212121'
      }
    ]
  },
  {
    'elementType': 'geometry.fill',
    'stylers': [
      {
        'saturation': 50
      },
      {
        'lightness': -55
      }
    ]
  },
  {
    'elementType': 'labels.icon',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#757575'
      }
    ]
  },
  {
    'elementType': 'labels.text.stroke',
    'stylers': [
      {
        'color': '#212121'
      }
    ]
  },
  {
    'featureType': 'administrative',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#757575'
      }
    ]
  },
  {
    'featureType': 'administrative.country',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#9e9e9e'
      }
    ]
  },
  {
    'featureType': 'administrative.land_parcel',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'administrative.locality',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#bdbdbd'
      }
    ]
  },
  {
    'featureType': 'poi',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#757575'
      }
    ]
  },
  {
    'featureType': 'poi.park',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#181818'
      }
    ]
  },
  {
    'featureType': 'poi.park',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#616161'
      }
    ]
  },
  {
    'featureType': 'poi.park',
    'elementType': 'labels.text.stroke',
    'stylers': [
      {
        'color': '#1b1b1b'
      }
    ]
  },
  {
    'featureType': 'road',
    'elementType': 'geometry.fill',
    'stylers': [
      {
        'color': '#2c2c2c'
      }
    ]
  },
  {
    'featureType': 'road',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#8a8a8a'
      }
    ]
  },
  {
    'featureType': 'road.arterial',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#373737'
      }
    ]
  },
  {
    'featureType': 'road.highway',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#3c3c3c'
      }
    ]
  },
  {
    'featureType': 'road.highway.controlled_access',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#4e4e4e'
      }
    ]
  },
  {
    'featureType': 'road.local',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#616161'
      }
    ]
  },
  {
    'featureType': 'transit',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#757575'
      }
    ]
  },
  {
    'featureType': 'water',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#000000'
      }
    ]
  },
  {
    'featureType': 'water',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#3d3d3d'
      }
    ]
  }
]

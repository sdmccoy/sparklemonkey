'use strict';

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

var greyView = [
  {
    'featureType': 'all',
    'elementType': 'all',
    'stylers': [
      {
        'visibility': 'on'
      }
    ]
  },
  {
    'featureType': 'all',
    'elementType': 'labels',
    'stylers': [
      {
        'visibility': 'on'
      },
      {
        'saturation': '-100'
      }
    ]
  },
  {
    'featureType': 'all',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'saturation': 36
      },
      {
        'color': '#000000'
      },
      {
        'lightness': 40
      },
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'all',
    'elementType': 'labels.text.stroke',
    'stylers': [
      {
        'visibility': 'off'
      },
      {
        'color': '#000000'
      },
      {
        'lightness': 16
      }
    ]
  },
  {
    'featureType': 'all',
    'elementType': 'labels.icon',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'administrative',
    'elementType': 'geometry.fill',
    'stylers': [
      {
        'color': '#000000'
      },
      {
        'lightness': 20
      }
    ]
  },
  {
    'featureType': 'administrative',
    'elementType': 'geometry.stroke',
    'stylers': [
      {
        'color': '#000000'
      },
      {
        'lightness': 17
      },
      {
        'weight': 1.2
      }
    ]
  },
  {
    'featureType': 'landscape',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#000000'
      },
      {
        'lightness': 20
      }
    ]
  },
  {
    'featureType': 'landscape',
    'elementType': 'geometry.fill',
    'stylers': [
      {
        'color': '#4d6059'
      }
    ]
  },
  {
    'featureType': 'landscape',
    'elementType': 'geometry.stroke',
    'stylers': [
      {
        'color': '#4d6059'
      }
    ]
  },
  {
    'featureType': 'landscape.natural',
    'elementType': 'geometry.fill',
    'stylers': [
      {
        'color': '#4d6059'
      }
    ]
  },
  {
    'featureType': 'poi',
    'elementType': 'geometry',
    'stylers': [
      {
        'lightness': 21
      }
    ]
  },
  {
    'featureType': 'poi',
    'elementType': 'geometry.fill',
    'stylers': [
      {
        'color': '#4d6059'
      }
    ]
  },
  {
    'featureType': 'poi',
    'elementType': 'geometry.stroke',
    'stylers': [
      {
        'color': '#4d6059'
      }
    ]
  },
  {
    'featureType': 'road',
    'elementType': 'geometry',
    'stylers': [
      {
        'visibility': 'on'
      },
      {
        'color': '#7f8d89'
      }
    ]
  },
  {
    'featureType': 'road',
    'elementType': 'geometry.fill',
    'stylers': [
      {
        'color': '#7f8d89'
      }
    ]
  },
  {
    'featureType': 'road.highway',
    'elementType': 'geometry.fill',
    'stylers': [
      {
        'color': '#7f8d89'
      },
      {
        'lightness': 17
      }
    ]
  },
  {
    'featureType': 'road.highway',
    'elementType': 'geometry.stroke',
    'stylers': [
      {
        'color': '#7f8d89'
      },
      {
        'lightness': 29
      },
      {
        'weight': 0.2
      }
    ]
  },
  {
    'featureType': 'road.arterial',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#000000'
      },
      {
        'lightness': 18
      }
    ]
  },
  {
    'featureType': 'road.arterial',
    'elementType': 'geometry.fill',
    'stylers': [
      {
        'color': '#7f8d89'
      }
    ]
  },
  {
    'featureType': 'road.arterial',
    'elementType': 'geometry.stroke',
    'stylers': [
      {
        'color': '#7f8d89'
      }
    ]
  },
  {
    'featureType': 'road.local',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#000000'
      },
      {
        'lightness': 16
      }
    ]
  },
  {
    'featureType': 'road.local',
    'elementType': 'geometry.fill',
    'stylers': [
      {
        'color': '#7f8d89'
      }
    ]
  },
  {
    'featureType': 'road.local',
    'elementType': 'geometry.stroke',
    'stylers': [
      {
        'color': '#7f8d89'
      }
    ]
  },
  {
    'featureType': 'transit',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#000000'
      },
      {
        'lightness': 19
      }
    ]
  },
  {
    'featureType': 'water',
    'elementType': 'all',
    'stylers': [
      {
        'color': '#2b3638'
      },
      {
        'visibility': 'on'
      }
    ]
  },
  {
    'featureType': 'water',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#2b3638'
      },
      {
        'lightness': 17
      }
    ]
  },
  {
    'featureType': 'water',
    'elementType': 'geometry.fill',
    'stylers': [
      {
        'color': '#24282b'
      }
    ]
  },
  {
    'featureType': 'water',
    'elementType': 'geometry.stroke',
    'stylers': [
      {
        'color': '#24282b'
      }
    ]
  },
  {
    'featureType': 'water',
    'elementType': 'labels',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'water',
    'elementType': 'labels.text',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'water',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'water',
    'elementType': 'labels.text.stroke',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'water',
    'elementType': 'labels.icon',
    'stylers': [
      {
        'visibility': 'off'
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

var blackView = [
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

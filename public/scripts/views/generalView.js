'use strict';

var app = app || {};

(function(module) {
  const generalView = {};

  const f = $('form')[0];

  // checks input from form for valid dates and place then changes the url
  generalView.handleFilterFormSubmit = function() {
    $('form').off('submit').on('submit', function(e) {
      e.preventDefault();
      $('#monkey-logo').addClass('small');
      $('#loading').show();
      // check city for valid string form
      if(!/^[\W\d]+$/.test(f.area.value)) {
        // check city against geo API
        app.mapView.getLocationCoords(f.area.value, function(data) {
          if (isValidDate(f.startDate.value) && isValidDate(f.endDate.value) && data.results.length === 1) {
            let city = data.results[0].formatted_address.split(', ')
            if (city[2] === 'USA') {
              city = city.slice(0,2).join(',%20');
            } else {
              city = city.shift();
            }
            let path = [city, f.startDate.value, f.endDate.value].join('/');
            if (location.href.includes('list')) {
              page.show(`/list/${path}`);
            } else {
              page.show(`/${path}`);
            }
          } else {
            $('#loading').hide();
            if (data.results.length === 0) {
              alert('Please enter a valid city.');
            } else if (data.results.length !== 1){
              alert('Please enter a more specific city.');
            } else {
              alert('Please enter a date in the form yyyy-mm-dd.');
            }
          }
        });
      }
    })
  }

  // checks if the given date string is of the form yyyy-mm-dd
  const isValidDate = function(date) {
    var matches = /^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})$/.exec(date);
    if (matches === null) return false;
    var d = matches[3];
    var m = matches[2] - 1;
    var y = matches[1];
    var composedDate = new Date(y, m, d);
    return composedDate.getDate() === parseInt(d) &&
    composedDate.getMonth() === parseInt(m) &&
    composedDate.getFullYear() === parseInt(y);
  }

  // sets the form to default values: place=Seattle, start=Today, end=In a Week
  generalView.setDefaults = function() {
    if (/-\d\d/.test(location.href)) {
      let params = location.href.split('/').slice(-3);
      f.area.value = params[0].replace(/%20/g, ' ');
      f.startDate.value = params[1];
      f.endDate.value = params[2];
      $('#monkey-logo').addClass('small');
    } else {
      f.area.value = 'Seattle';
      let today = new Date();
      let month = `${today.getMonth() + 1}`.length < 2 ? `0${today.getMonth() + 1}` : today.getMonth() + 1;
      let day = `${today.getDate()}`.length < 2 ? `0${today.getDate()}` : today.getDate();
      f.startDate.value = `${today.getFullYear()}-${month}-${day}`;
      let weekAway = new Date(today.setDate(today.getDate() + 7));
      month = `${weekAway.getMonth() + 1}`.length < 2 ? `0${weekAway.getMonth() + 1}` : weekAway.getMonth() + 1;
      day = `${weekAway.getDate()}`.length < 2 ? `0${weekAway.getDate()}` : weekAway.getDate();
      f.endDate.value = `${weekAway.getFullYear()}-${month}-${day}`;
    }
  }

  module.generalView = generalView;
})(app);

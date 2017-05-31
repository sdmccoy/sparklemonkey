'use strict';

var app = app || {};

(function(module) {
  const generalView = {};

  const f = $('form')[0];

  generalView.handleFilterFormSubmit = function() {
    $('form').off('submit').on('submit', function(e) {
      e.preventDefault();
      let path = [f.area.value, f.startDate.value, f.endDate.value].join('/');
      page.show(`/list/${path}`);
    })
  }

  generalView.isValidDate = function(date) {
    var matches = /^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/.exec(date);
    if (matches === null) return false;
    var d = matches[2];
    var m = matches[1] - 1;
    var y = matches[3];
    var composedDate = new Date(y, m, d);
    return composedDate.getDate() === d &&
    composedDate.getMonth() === m &&
    composedDate.getFullYear() === y;
  }

  generalView.setDefaults = function() {
    f.area.value = '98121';
    let today = new Date();
    let month = `${today.getMonth() + 1}`.length < 2 ? `0${today.getMonth() + 1}` : today.getMonth() + 1;
    let day = `${today.getDate()}`.length < 2 ? `0${today.getDate()}` : today.getDate();
    f.startDate.value = `${today.getFullYear()}-${month}-${day}`;
    let weekAway = new Date(today.setDate(today.getDate() + 7));
    month = `${weekAway.getMonth() + 1}`.length < 2 ? `0${weekAway.getMonth() + 1}` : weekAway.getMonth() + 1;
    day = `${weekAway.getDate()}`.length < 2 ? `0${weekAway.getDate()}` : weekAway.getDate();
    f.endDate.value = `${weekAway.getFullYear()}-${month}-${day}`;
  }

  module.generalView = generalView;
})(app);

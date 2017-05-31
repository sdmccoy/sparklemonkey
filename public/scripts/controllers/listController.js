'use strict';

var app = app || {};

(function(module){
  const listController = {};

  listController.index = function(){
    $('.button-content').hide();
    $('#list').show();
    app.listView.initIndexPage();
  }
  module.listController = listController;
})(app);

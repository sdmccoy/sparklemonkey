'use strict';

var app = app || {};

(function(module){
  const aboutController = {};

  aboutController.index = function(){
    $('.button-content').hide();
    $('#about').show();
    app.aboutView.initIndexPage();
  };
  module.aboutController = aboutController;
})(app);

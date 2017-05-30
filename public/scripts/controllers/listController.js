'use strict';

var app = app || {};

(function(module){
  const listController = {};

  listController.index = function(){
    $('.button-content').hide();
    //show section 
  }
  module.listController = listController;
})(app);

(function() {

  'use strict';

  angular
    .module('myApp', [
      'ngRoute',
      'myApp.config',
      'myApp.components.home',
      'myApp.components.projects',
      'myApp.components.contact'
    ]);

})();

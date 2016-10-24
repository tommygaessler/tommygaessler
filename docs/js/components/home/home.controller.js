(function() {

  'use strict';

  angular
    .module('myApp.components.home', [])
    .controller('homeController', homeController);

  homeController.$inject = ['$scope'];

  function homeController($scope) {
    /*jshint validthis: true */
    this.greeting = 'Home';
  }

})();

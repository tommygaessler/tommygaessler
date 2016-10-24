(function() {

  'use strict';

  angular
    .module('myApp.components.contact', [])
    .controller('contactController', contactController);

  contactController.$inject = ['$scope'];

  function contactController($scope) {
    /*jshint validthis: true */
    this.greeting = 'Contact';
  }

})();

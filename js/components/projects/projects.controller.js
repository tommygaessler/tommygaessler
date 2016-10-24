(function() {

  'use strict';

  angular
    .module('myApp.components.projects', [])
    .controller('projectsController', projectsController);

  projectsController.$inject = ['$scope'];

  function projectsController($scope) {
    /*jshint validthis: true */
    this.greeting = 'Projects';
  }

})();

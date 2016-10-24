(function() {

  'use strict';

  angular
    .module('myApp.config', [])
    .config(appConfig);

  function appConfig($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: '/js/components/home/home.view.html',
      controller: 'homeController',
      controllerAs: 'homeCtrl'
    })
    .when('/projects', {
      templateUrl: '/js/components/projects/projects.view.html',
      controller: 'projectsController',
      controllerAs: 'projectsCtrl'
    })
    .when('/contact', {
      templateUrl: '/js/components/contact/contact.view.html',
      controller: 'contactController',
      controllerAs: 'contactCtrl'
    })
    .otherwise('/');
  }

})();

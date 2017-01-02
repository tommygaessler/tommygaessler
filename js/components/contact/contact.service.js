(function() {

  'use strict';

  angular
  .module('myApp.components.contact')
  .service('ContactService', ContactService);

  ContactService.$inject = ['$http'];

  function ContactService($http) {
    this.SendGrid = function(form) {
      return $http({
        method: 'POST',
        url: 'https://sendgrid-email-server.herokuapp.com/',
        data: form,
        headers: {'Content-Type': 'application/json'}
      });
    };
  }
})();

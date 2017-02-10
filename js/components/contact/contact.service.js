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
        url: 'https://ujj9l4tjj6.execute-api.us-east-1.amazonaws.com/prod/sendgrid-email-serverless',
        data: form,
        headers: {'Content-Type': 'application/json'}
      });
    };
  }

})();

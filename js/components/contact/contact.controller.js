(function() {

  'use strict';

  angular
    .module('myApp.components.contact', [])
    .controller('contactController', contactController);

  contactController.$inject = ['$scope', 'ContactService'];

  function contactController($scope, ContactService) {
    /*jshint validthis: true */
    const vm = this;
    this.form = true;

    vm.SendGrid = function() {
      vm.submit = true;
      ContactService.SendGrid(vm.emailObj)
      .then((message) => {
        vm.message = message.data.message;
      })
      .catch(() => {
        
      });
    };
  }

})();

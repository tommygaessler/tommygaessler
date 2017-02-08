(function() {

  'use strict';

  angular
    .module('myApp.components.contact', [])
    .controller('contactController', contactController);

  contactController.$inject = ['$scope', 'ContactService'];

  function contactController($scope, ContactService) {
    /*jshint validthis: true */

    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const vm = this;
    vm.form = true;

    vm.emailEmptyErrorMessage;
    vm.emailInvalidErrorMessage;

    vm.nameEmptyErrorMessage;

    vm.messageEmptyErrorMessage;


    vm.SendGrid = function() {

      if(angular.isUndefined(vm.emailObj)) {
        vm.emailObj = '';
      }

      if(!emailRegex.test(vm.emailObj.from_email)) {
        vm.emailInvalidErrorMessage = true;
      } else {
        vm.emailInvalidErrorMessage = false;
      }

      if(vm.emailObj.from_email === '' || vm.emailObj.from_email === undefined) {
        vm.emailEmptyErrorMessage = true;
      } else {
        vm.emailEmptyErrorMessage = false;
      }

      if(vm.emailObj.name === '' || vm.emailObj.name === undefined) {
        vm.nameEmptyErrorMessage = true;
      } else {
        vm.nameEmptyErrorMessage = false;
      }

      if(vm.emailObj.message === '' || vm.emailObj.message === undefined) {
        vm.messageEmptyErrorMessage = true;
      } else {
        vm.messageEmptyErrorMessage = false;
      }

      if(!vm.emailInvalidErrorMessage && !vm.emailEmptyErrorMessage && !vm.nameEmptyErrorMessage && !vm.messageEmptyErrorMessage) {

        vm.submit = true;

        ContactService.SendGrid(vm.emailObj)
        .then((message) => {
          vm.message = message.data.message;
        })
        .catch((error) => {
          console.log(error);
        });
      }
    };
  }

})();

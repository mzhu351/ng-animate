'use strict';

/**
 * @ngdoc function
 * @name anmProjApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the anmProjApp
 */
angular.module('anmProjApp')
  .controller('ContactCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.pageClass = 'page-contact';
  });

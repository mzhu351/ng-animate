'use strict';

/**
 * @ngdoc function
 * @name anmProjApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the anmProjApp
 */
angular.module('anmProjApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.pageClass = 'page-about';
  });

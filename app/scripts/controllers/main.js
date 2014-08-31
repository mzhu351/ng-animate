'use strict';

/**
 * @ngdoc function
 * @name anmProjApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the anmProjApp
 */
angular.module('anmProjApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.pageClass = 'page-main';
  });

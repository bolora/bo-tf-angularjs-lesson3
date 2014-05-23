'use strict';

angular.module('boTfAngularjsLesson3App', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'calcController'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('calcController', function($scope){

    function init () {
      $scope.transaction = {};
      $scope.lastTransaction = {};
      $scope.taxRate = 8.25;
      $scope.tipPercentage = 15;
      $scope.transactions = [];
      $scope.totals = {};
    }
    init();

    $scope.calculate = function(reset) {
      if(reset) {
        init();
      } else {

        $scope.errorMessage = false;
        $scope.infoMessage = false;

        if(!$scope.transaction.basePrice) {
          $scope.errorMessage = "Please enter a base meal price.";
        }
        if($scope.tipPercentage < 15 ){
          $scope.infoMessage = "What freaking cheapskate!";
        }
        if(parseFloat($scope.taxRate) == NaN){
          $scope.errorMessage = "Tax rate should be a number. Example: 8.25";
        }

        if(!$scope.errorMessage) {
          $scope.transaction.subtotal = parseFloat($scope.transaction.basePrice) + (parseFloat($scope.transaction.basePrice) * parseFloat($scope.taxRate)/100);
          $scope.transaction.tipAmount = parseFloat($scope.transaction.basePrice) * parseFloat($scope.tipPercentage)/100;
          $scope.transaction.total = parseFloat($scope.transaction.subtotal) + parseFloat($scope.transaction.tipAmount);
          $scope.transactions.push(angular.copy($scope.transaction));
          $scope.lastTransaction = angular.copy($scope.transaction)
          $scope.transaction={};

          $scope.totals.tips = 0;
          angular.forEach($scope.transactions, function(t) {
            $scope.totals.tips = $scope.totals.tips + t.tipAmount;
          });
          $scope.totals.count = $scope.transactions.length;
          if($scope.transactions.length == 1) {
            $scope.totals.countLabel = "meal";
          } else {
            $scope.totals.countLabel = "meals"
          }
          $scope.totals.tipsAvg = $scope.totals.tips / $scope.totals.count;

          
        }
        $("#base-price").focus();


      }


    }
  });

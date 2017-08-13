angular
 .module('app')
 .controller("MainCtrl", function($scope, getQuotes, detailQuotes){
 	$scope.quotes = getQuotes.get();
 });
angular
 .module('app')
 .controller("MainCtrl", function($scope, getQuotes, detailQuotes){
 	$scope.quotes = getQuotes.get();

 	$scope.getDetailquotes = function() {
  		$scope.allQuotes = detailQuotes.get({name:$scope.selectedName, beginDate:$scope.beginDate, endDate:$scope.endDate});      
  	}

  	$scope.company = [
  		{ symbol:"AAPL", name: "Apple" },
   		{ symbol:"FB", name: "Facebook" },
   		{ symbol:"TSLA", name: "Tesla" },
   		{ symbol:"AMZN", name: "Amazon" },
   		{ symbol:"MSFT", name: "Microsoft" },
   		{ symbol:"NFLX", name: "Netflix" } 
   	]
 });
angular
 .module('app')
 .controller("MainCtrl", function($scope, getQuotes, detailQuotes, $filter){
 	$scope.quotes = getQuotes.get();

 	$scope.getDetailquotes = function() {
      $scope.firstDate = $filter('date')($scope.beginDate, 'yyyy-MM-dd')
      $scope.secondDate =$filter('date')($scope.endDate, 'yyyy-MM-dd')
  		$scope.allQuotes = detailQuotes.get({name:$scope.selectedName, beginDate:$scope.firstDate, endDate:$scope.secondDate});      
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

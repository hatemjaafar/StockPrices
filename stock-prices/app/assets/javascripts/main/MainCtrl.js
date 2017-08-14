angular
    .module('app')
    .controller("MainCtrl", function($scope, getQuotes, detailQuotes, $filter, $window){
        $scope.quotes = getQuotes.get();

        // This function prepare date to be showen in d3js directive
        $scope.prepareData = function(allQuotes)
        {
            $scope.quotesData = [];
            angular.forEach(allQuotes.history.day, function(value, key) {
                $scope.quotesData.push({"date": value.date, "total": Number(value.close)})
            });
            $scope.showGraphics = true
        }

        // This function get the detail quotes of the selected compagny
        $scope.getDetailquotes = function() {
        
            // format dates to get the format needed by API.
            $scope.showGraphics = null
            $scope.formatedBeginDate = $filter('date')($scope.beginDate, 'yyyy-MM-dd')
            $scope.formatedEndDate =$filter('date')($scope.endDate, 'yyyy-MM-dd')

            // Send get request and call function to prepare data.
            detailQuotes.get({name:$scope.selectedName, beginDate:$scope.formatedBeginDate, endDate:$scope.formatedEndDate},function(allQuotes){
                $scope.allQuotes= allQuotes;
                $scope.prepareData(allQuotes)
            });
        }
        
        $scope.maxDate = new Date();
        $scope.minDate = new Date(
            $scope.maxDate.getFullYear(),
            $scope.maxDate.getMonth() - 1,
            $scope.maxDate.getDate()
        );

        $scope.$watch('beginDate', function(newVal, oldVal){
            if(angular.equals(newVal, oldVal)){
                return; // simply skip that
            }
            console.log(newVal)
            console.log(oldVal)

            $scope.var = new Date(newVal)
            $scope.endDate = new Date(
                $scope.var.getFullYear(),
                $scope.var.getMonth(),
                $scope.var.getDate() + 4,
            )        
        }, true);
        // This scope define company name and symbol
        $scope.company = [
            { symbol: "AAPL", name: "Apple"      },
            { symbol: "FB"  , name: "Facebook"   },
            { symbol: "TSLA", name: "Tesla"      },
            { symbol: "AMZN", name: "Amazon"     },
            { symbol: "MSFT", name: "Microsoft"  },
            { symbol: "NFLX", name: "Netflix"    }
        ]
    });

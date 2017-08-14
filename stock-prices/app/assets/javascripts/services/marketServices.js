angular
    .module('app')
    .factory('getQuotes', function($resource) { 
    
    // This factory uses the $resource to make a get request on my Rails route, with the parameters date and city
    return $resource('http://localhost:3000/quotes')
    })

    .factory('detailQuotes', function($resource) {
    
    // This factory uses the $resource to make a get request on my Rails route, with the parameters date and city
    return $resource('http://localhost:3000/detailQuotes/:name/:beginDate/:endDate')
    });
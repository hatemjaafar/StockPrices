angular
.module("app", ["ui.router", "templates", "ngResource", "ngMaterial", "ngRoute"])
.config(["$stateProvider", "$urlRouterProvider",function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state("home", {
		url: "/home",
		templateUrl: "main/_index.html",
		controller: "MainCtrl"
	})
	$urlRouterProvider.otherwise("home");
}])
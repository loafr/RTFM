var app = angular.module('rtfmApp', ['firebase', 'ngRoute']);

app.config(function($routeProvider) {
	
	$routeProvider
	.when('/login', {
		templateUrl: 'login/login.html',
		controller: 'LoginCtrl'
	})
	.when('/threads', {
		templateUrl: 'threads/threads.html',
		controller: 'ThreadCtrl'
	})
	.when('/threads/:threadId', {
		templateUrl: '',
		controller: ThreadCtrl
	})
	.otherwise({
		redirectTo: '/login'
	});
});




// app.config(function($routeProvider, $httpProvider){
//   $httpProvider.interceptors.push('httpRequestInterceptor');
//   $routeProvider
//   .when('/', {
//   	templateUrl: 'js/home/homeTmpl.html',
//   	controller: 'homeCtrl',
//     resolve: {
//       allData: function($route, homeService) {
//         return homeService.getAllData();
//       }
//     }
//   })
//   .when('/teams/:team', {
//   	templateUrl: 'js/teams/teamTmpl.html',
//   	controller: 'teamCtrl',
//   	resolve: {
//   		teamData: function($route, teamService) {
//         return teamService.getTeamData($route.current.params.team)
//       }
//     }
//   })
//   .otherwise ({
//   	redirectTo: '/'
//   })
// });
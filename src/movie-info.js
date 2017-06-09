import angular from 'angular';
import ngRoute from 'angular-route';

import Components from './components';
import MovieInfoComponent from './movie-info.component';

angular.module('MovieInfo', [
	ngRoute,
    Components
])
.component('movieInfo', MovieInfoComponent)
.config(function($routeProvider){
	$routeProvider
		.when('/list', {template: '<movie-info-list> </movie-info-list>'})
		.when('/about', {template: '<movie-info-about></movie-info-about>'})
		.otherwise({redirectTo: '/list'});
});
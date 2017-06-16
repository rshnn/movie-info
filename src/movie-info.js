import './sass/main.scss';

import angular from 'angular';
import ngRoute from 'angular-route';
import ngAnimate from 'angular-animate';

import Components from './components';
import MovieInfoComponent from './movie-info.component';

angular.module('MovieInfo', [
	ngRoute,
	ngAnimate, 
    Components
])
.component('movieInfo', MovieInfoComponent)
.config(function($routeProvider){
	$routeProvider
		.when('/list', {template: '<movie-info-list> </movie-info-list>'})
		.when('/about', {template: '<movie-info-about></movie-info-about>'})
		.otherwise({redirectTo: '/list'});
});
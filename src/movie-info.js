import angular from 'angular';
import ngComponentRouter from 'angular-component-router-noscope';

import Components from './components';
import MovieInfoComponent from './movie-info.component';

angular.module('MovieInfo', [
	ngComponentRouter,
    Components
])
.component('movieInfo', MovieInfoComponent);
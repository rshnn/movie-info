import angular from 'angular';

import Components from './components';
import MovieInfoComponent from './movie-info.component';

angular.module('MovieInfo', [
    Components
])
.component('movieInfo', MovieInfoComponent);
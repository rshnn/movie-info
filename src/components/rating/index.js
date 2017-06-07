import angular from 'angular';
import RatingComponent from './rating.component';


const rating = angular 
    .module('movie-info.rating', [])
    .component('movieInfoRating', RatingComponent)
    .name;

export default rating;
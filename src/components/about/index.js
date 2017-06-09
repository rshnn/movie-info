import angular from 'angular';
import AboutComponent from './about.component';


const about = angular 
    .module('movie-info.about', [])
    .component('movieInfoAbout', AboutComponent)
    .name;

export default about;
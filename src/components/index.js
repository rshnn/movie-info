import angular from 'angular';
import list from './list';


const components = angular
    .module('movie-list.components', [
        list
    ])
    .name; 

export default components;
import angular from 'angular';
import list from './list';
import rating from'./rating';
import about from './about';
import DataManager from './data-manager.service.js';


const components = angular
    .module('movie-list.components', [
        list, 
        rating,
        about
    ])
    .service('DataManager', DataManager)
    .name; 

export default components;
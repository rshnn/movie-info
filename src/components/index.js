import angular from 'angular';
import list from './list';
import rating from'./rating';
import DataManager from './data-manager.service.js';


const components = angular
    .module('movie-list.components', [
        list, 
        rating
    ])
    .service('DataManager', DataManager)
    .name; 

export default components;
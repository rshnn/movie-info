import angular from 'angular';
import ListComponent from './list.component';


const list = angular 
    .module('movie-info.list', [])
    .component('movieInfoList', ListComponent)
    .name;

export default list;
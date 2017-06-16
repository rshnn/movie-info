import angular from 'angular';
import AccordianComponent from './accordian.component';

import Components from './components';

const accordian = angular 
	.module('movie-info.accordian', [
			Components
	])
	.component('movieInfoAccordian', AccordianComponent)
	.name;


export default accordian;
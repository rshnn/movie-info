import angular from 'angular';
import panel from './panel';

const components = angular 
	.module('accordian.components', [
		panel
	])
	.name;

export default components;  

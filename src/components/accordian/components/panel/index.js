import angular from 'angular';
import PanelComponent from './panel.component';

const panel = angular 
	.module('accordian.panel', [])
	.component('accordianPanel', PanelComponent)
	.name;


export default panel;
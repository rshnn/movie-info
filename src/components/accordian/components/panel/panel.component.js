import controller from './panel.controller';
import PanelTemplate from './panel.html';


const PanelComponent = {
	bindings: {
		'heading': '@'
	},
	require: {
		'parent': '^movieInfoAccordian'
	},
    controller, 
    transclude: true,
    controllerAs: 'model',
    templateUrl: PanelTemplate
};

export default PanelComponent;
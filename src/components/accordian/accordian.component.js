import controller from './accordian.controller';
import AccordianTemplate from './accordian.html';


const AccordianComponent = {
    controller, 
    transclude: true,
    controllerAs: 'model',
    templateUrl: AccordianTemplate
};

export default AccordianComponent;
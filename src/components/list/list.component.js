import controller from './list.controller';
import ListTemplate from './list.html';


const ListComponent = {
    controller, 
    controllerAs: 'model',
    templateUrl: ListTemplate
};

export default ListComponent;
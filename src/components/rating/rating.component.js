import controller from './rating.controller';
import RatingTemplate from './rating.html';


const RatingComponent = {
    controller, 
    controllerAs: 'model', 
    templateUrl: RatingTemplate
};

export default RatingComponent;
import controller from './rating.controller';
import RatingTemplate from './rating.html';


const RatingComponent = {
    bindings: {
        value: '<', 
        max: '<', 
        setRating: '&'
    }, 
    controller, 
    controllerAs: 'model', 
    templateUrl: RatingTemplate
};

export default RatingComponent;
import controller from './about.controller';
import AboutTemplate from './about.html';


const AboutComponent = {
    controller, 
    controllerAs: 'model',
    templateUrl: AboutTemplate
};

export default AboutComponent;
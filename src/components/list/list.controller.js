class ListController {


    constructor(){
        var model = this;

        model.message = 'Hello from list controller';
    }


    changeMessage(){
        var model = this;

        model.message = 'Peaches and astronaut stuff';
    }

}


export default ListController;
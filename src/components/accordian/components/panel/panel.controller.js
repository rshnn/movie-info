class PanelController { 

	constructor(){
		this.selected = false;
	}	

	$onInit(){

		this.parent.addPanel(this);
	}


	turnOn(){
		this.selected = true;
	}

	turnOff(){
		this.selected = false;
	}

	select(){
		this.parent.selectPanel(this);
	}

}



export default PanelController;
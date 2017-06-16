class AccordianController { 
	
	constructor(){

		this.panels = [];

	}


	addPanel(panel){


		this.panels.push(panel);
		
		if(this.panels.length > 0){
			this.panels[0].turnOn();
		}

	}


	selectPanel(panel){
		var i;

		for(i in this.panels){

			if(panel === this.panels[i]){
				this.panels[i].turnOn();
			}else {
				this.panels[i].turnOff();
			}

		}
	}


}

export default AccordianController;
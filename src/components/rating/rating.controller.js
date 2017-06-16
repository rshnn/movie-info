class RatingController {

	constructor($scope, DataManager){
		this.$scope = $scope;
		this.dataManager = DataManager;

		// console.log(this);
	}


	
	$onChanges(changes){
		if(changes.value.isFirstChange()){
			return;
		}
		this.entries = this.buildEntries(this.value, this.max);
	}


	$onInit(){
		this.entries = new Array(this.max);
	}


	buildEntries(value, max){
		var entries = [];
		var i;
		var icon;


		for (i = 1; i <= max; i++){
			icon = i <= value ? 'glyphicon-star' : 'glyphicon-star-empty';
			entries.push(icon);
		}

		return entries; 
	}


}

export default RatingController;
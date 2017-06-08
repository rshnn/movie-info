class RatingController {

	constructor($scope, DataManager){
		this.$scope = $scope;
		this.dataManager = DataManager;

		// console.log(this);
	}


	
	$onChanges(changes){
		// console.log(changes);

		if(changes.value.isFirstChange()){
			return;
		}


		this.entries = new Array(changes.value.currentValue);



	}

}

export default RatingController;
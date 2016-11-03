(function(){

	angular
	 .module('App')	
	 .controller('MainController', MainController);
	
	MainController.$inject = ['listService'];
	
	function MainController(listService){
	 var vm = this;
	 
	 vm.load =  listService.setObject();	
	 vm.object = listService.getObject();
	 
	 
	
	}
})();
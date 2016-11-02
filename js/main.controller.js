(function(){

	angular
	 .module('App')	
	 .controller('MainController', MainController);
	
	MainController.$inject = ['listService'];
	
	function MainController(listService){
	 var vm = this;
	 
	 vm.load = load;
	 function load(){
		 listService.getObject();
		 listService.setObject(); 
	     
	 }
	}
})();
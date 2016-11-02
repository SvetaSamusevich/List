(function(){
	angular
		.module('App.service')
		.service('listService',ListService);
		
	ListService.$inject = ['$http'];
	
	function ListService($http){
		var ser = this;
		
		//
		var object = {};
		
		object.firstList=[];
		object.secondList=[];
		object.thirdList=[];
		
		ser.getObject = getObject;
		ser.setObject = setObject;
		
		function getObject(){
			return object;
		}
		
		function random(){
			var ran = Math.floor(Math.random()*3)+1;
			return ran;
		}
		
		function setObject(){
			
			$http.get("roster/initial json/"+random()+".json")
				.then(function(res){
						object.firstList = res.data.List;
						return $http.get(res.data.Road);
						}
						// ,function(){
							// alert("error");
							// }
				)
				.then(function(res){
					object.secondList = res.data.List;
						return $http.get(reas.data.Road);
					}
					// ,function(){
						// alert("error");
					// }
				)
				.then(function(res){
					object.thirdList = res.data.List;
					}
					// ,function(){
						// alert("error");
					// }
				)
		}
	}
})();
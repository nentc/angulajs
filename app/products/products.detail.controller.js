angular.module('workshopApp')
.controller('ProductDetailController', function($scope, $stateParams, ProductsService){
	var id = $stateParams.id;
	ProductsService.getProduct(id).then(function(data){
		$scope.product = data;
		console.log(data);
	});
});


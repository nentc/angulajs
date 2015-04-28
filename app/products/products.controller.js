angular.module('workshopApp').controller('ProductsController', function($scope, ProductsService){
	ProductsService.getAllProducts().success(function(data){
		$scope.products = data.products;
	});

	$scope.addToCart = function(product) {
		ProductsService.addToCart(product);
	}


});
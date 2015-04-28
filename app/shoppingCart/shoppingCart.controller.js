angular.module('workshopApp').controller('ShoppingCartController', function($scope, ProductsService){
	$scope.myProducts = ProductsService.getCart();
	console.log($scope.myProducts);

	$scope.getTotal = function(){
		$scope.total = 0;
		for(var i = 0; i<$scope.myProducts.length; i++){
			$scope.total += parseInt($scope.myProducts[i].price);
		}
	};

	$scope.getTotal();

})
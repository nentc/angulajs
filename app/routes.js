angular.module('workshopApp').config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/products');

	$stateProvider
		.state('products', {
			controller:'ProductsController',
			templateUrl:'app/products/products.html',
			url:'/products',
		})
		.state('detail',{
			controller:'ProductDetailController',
			templateUrl:'app/products/product-detail.html',
			url:'/:id'
		})
		.state('cart', {
			controller:'ShoppingCartController',
			templateUrl:'app/shoppingCart/shoppingCart.html',
			url:'/cart'
		})
})
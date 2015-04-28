angular.module('workshopApp').service('ProductsService', function($http, $q) {
    var products = [];
    return {
        getAllProducts: function() {
            return $http.get('fakedata.json');
        },
        getProduct: function(id) {
        	var deferred = $q.defer();
            $http.get('fakedata.json').success(function(data) {
                var _products = data.products;
                for (var i = 0; i < _products.length; i++) {
                    if (id == _products[i].id) {
                        deferred.resolve(_products[i]);
                        console.log('teste?');
                    }
                }
            });
            return deferred.promise;

        },
        addToCart: function(product) {
            products.push(product);
        },
        getCart: function() {
            return products;
        }
    }
})

(function () {
    'use strict';

    angular
        .module('eCommerceApp')
        .factory('productFactory',ProductFactory);

    ProductFactory.$inject = ['$http'];

    function ProductFactory($http) {
        return {
            getProducts: getProduct
        }

        function getProduct() {
            return $http.get('app/product/data/product.json')
                .then(getProductSucceeded, getProductFailed) ;

            function getProductSucceeded(response) {
                return  response.data.products;
            }

            function getProductFailed(error) {
                //TODO: Implement the logger
                console.log(error.data);
            }
        }
       
    }

})();
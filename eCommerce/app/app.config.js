(function () {
    'use strict';

    //Main Application module 
    angular
        .module('eCommerceApp')
        .config(AppRouting);

    function AppRouting($locationProvider,$routeProvider) {
        
         $routeProvider
            .when(
                '/list', {
                    controller: 'productController',
                    controllerAs: 'productList',
                    templateUrl: '/app/product/product.list.html'
                })
            .when(
                '/cart', {
                    controller: 'cartController',
                    controllerAs: 'cart',
                    templateUrl: '/app/shoppingCart/shopping.list.html'
                })
            .otherwise({
                redirectTo: '/'
            });
    }
    
})();
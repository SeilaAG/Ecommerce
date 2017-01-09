(function () {
    'use strict';

    angular
        .module('eCommerceApp')
        .controller('productController', ProductController);

    ProductController.$inject = ['productFactory'];

    function ProductController(productFactory) {
        var self = this;
        self.products = [];

        self.categories = [""];
        getProductInventory();

        function getProductInventory() {
            productFactory.getProducts()
                .then(function (data) {
                    self.products = data;

                    self.categories = setCategories(data);
                });            
        }

        function setCategories(arr) {      

            var allCategories = arr.map(function(item){
                return item.category});

            return  allCategories
                .filter(function (item, pos, self) {
                return self.indexOf(item) == pos;
                })
                .sort();
        }

    }

})();
(function () {
    'use strict';

    angular
        .module('eCommerceApp')
        .controller('cartController', CartController);

    function CartController() {
        var self = this;
        self.shoppingList = [];
        self.totalItem = 0;
        self.addItem = addItem;
        self.removeItem = removeItem;
        self.totalPrice = 0;
        self.updateProductTotalPrice = updateProductTotalPrice;


        function addItem(quantity, product) {
            var item = product;

            if (self.shoppingList.indexOf(product) < 0) {

                item.quantity = quantity ? quantity : 0;

                item.totalPrice = item.quantity * item.price;

                self.shoppingList.push(item);

                return;
            }

            item = self.shoppingList[self.shoppingList.indexOf(product)];
            item.quantity += quantity;
            item.totalPrice = item.quantity * item.price;

            self.totalPrice = setTotalPrice();
        };

       function removeItem(productIndex) {

           var item = self.shoppingList[productIndex];

           item.quantity--;

           if (item.quantity <= 0) {
               self.shoppingList.splice(productIndex, 1);
               return;
           }

           item.totalPrice = item.quantity * item.price;

           self.totalPrice = setTotalPrice();
       };

       function setTotalPrice() {
           return self.shoppingList.reduce(function (val, obj) {
               return val + obj.totalPrice;
           },0);
           
       };

       function updateProductTotalPrice(product) {
           product.totalPrice = product.quantity * product.price;

           self.totalPrice = setTotalPrice();
       };
       

    }

})();
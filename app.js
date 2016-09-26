(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buy = this;
  buy.boughtItem = function (index) {
    ShoppingListCheckOffService.bought(index);
  }

  buy.items = ShoppingListCheckOffService.displaytoBuyItem();

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;

  bought.items = ShoppingListCheckOffService.displayBoughtItem();

}


function ShoppingListCheckOffService() {
  var service = this;

  var toBuy_item = [{
    quantity : 10,
    name : 'cookies'
  },
  {
    quantity : 5,
    name : 'Gingerbread'
  },
  {
    quantity : 3,
    name : 'Ice Cream Cake'
  },
  {
    quantity : 20,
    name : 'Blueberry'
  },
  {
    quantity : 10,
    name : 'Kit-kat'
  },
];
  var bought_item = [];

  service.bought = function (index) {
    var item = toBuy_item[index];
    toBuy_item.splice(index,1);
    bought_item.push(item);
  }

  service.displayBoughtItem = function() {
    return bought_item;
  }

  service.displaytoBuyItem = function() {
    return toBuy_item;
  }
}

})();

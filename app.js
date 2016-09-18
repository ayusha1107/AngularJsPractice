(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.output = "";
  $scope.menuList = "";
  $scope.customStyle = {};

  $scope.lunchChecker = function () {

    $scope.output = getMessage($scope.menuList);
    setColor($scope.output);
  };

  function setColor(string) {
    if(string == "Please enter data first") {
      $scope.customStyle.style = {"color":"red"};
    }
    else {
      $scope.customStyle.style = {"color":"green"};
    }

  }

  function getMessage(string) {

    var list = "";
    list = string.split(",");
    list = list.join('').split('');

    if(list.length == 0) {
      return "Please enter data first";
    }
    else if(list.length > 0 && list.length <= 3) {
      return "Enjoy!";
    }
    else  {
      return "Too much!";
    }

  }
}

})();

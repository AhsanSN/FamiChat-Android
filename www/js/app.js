angular.module('homeMenu', ['ionic'])

  .controller('homeMenuCtrl', function ($scope, $ionicModal) {

    // quit app
    $scope.quitApp = function () {
      console.log("quit")
    };

    $scope.toChat = function () {
      console.log("tochat")
      window.location = "/pages/chat.html?room=test"
    }

  })

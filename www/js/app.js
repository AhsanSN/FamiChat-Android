angular.module('homeMenu', ['ionic'])

  .controller('homeMenuCtrl', function ($scope, $ionicModal) {

    // quit app
    $scope.quitApp = function () {
      console.log("quit")
    };

    $scope.toChat = function () {
      console.log("tochat")
      window.location = "/pages/chat.html?room=7860"
    }

    $scope.createRoom = function () {
      console.log("createRoom")
      window.location = "/pages/chat.html?room=7860"
    }
    
    $scope.JoinRoom = function () {
      console.log("JoinRoom")
      window.location = "/pages/chat.html?room=7860"
    }

  })

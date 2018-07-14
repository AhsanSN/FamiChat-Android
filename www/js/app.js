angular.module('homeMenu', ['ionic'])

  .controller('homeMenuCtrl', function ($scope, $ionicModal) {

    $ionicModal.fromTemplateUrl('chatModal.html', function (modal) {
      $scope.taskModal = modal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    // quit app
    $scope.quitApp = function () {
      console.log("quit")
    };

    $scope.toChatModal = function () {
      console.log("tochat modal")
      $scope.taskModal.show();
    }

    $scope.toChat = function () {
      console.log("tochat")
      window.location = "/pages/chat.html?room=7860"
    }

    $scope.closeChatModal = function () {
      console.log("hide modal")
      $scope.taskModal.hide();
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

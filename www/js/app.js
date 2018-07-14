angular.module('homeMenu', ['ionic'])

  .controller('homeMenuCtrl', function ($scope, $ionicModal) {

    //used as database for your data
    $scope.tasks = [
      { title: 'My task 1' }
    ];

    // quit app
    $scope.quitApp = function () {
      console.log("quit")
    };

    $scope.toChat = function () {
      console.log("tochat")
      window.location = "asd"
    }

  })

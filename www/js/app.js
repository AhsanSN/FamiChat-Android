angular.module('homeMenu', ['ionic'])

  .controller('homeMenuCtrl', function ($scope, $ionicModal, $a = "a") {

    //used as database for your data
    $scope.tasks = [
      { title: 'My task 1' }
    ];

    // Create and load the Modal

    // Called when the form is submitted
    $scope.createTask = function (task) {
      $scope.tasks.push({
        title: task.title
      });
      $scope.taskModal.hide();
      task.title = "";
    };

    // Open our new task modal
    $scope.newTask = function () {
      $scope.taskModal.show();
    };

    // Close the new task modal
    $scope.closeNewTask = function () {
      $scope.taskModal.hide();
    };
  })

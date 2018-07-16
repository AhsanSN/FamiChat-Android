//get camera permission
if (navigator.getUserMedia) {
  // Request the camera.
  navigator.getUserMedia(
    // Constraints
    {
      video: true,
      audio: true
    },

    // Success Callback
    function(localMediaStream) {
      console.log('permission given');

    },

    // Error Callback
    function(err) {
      // Log the error to the console.
      console.log('The following error occurred when trying to use getUserMedia: ' + err);
    }
  );

} else {
  alert('Sorry, your browser does not support getUserMedia');
}



angular.module('homeMenu', ['ionic'])

  .factory('Projects', function() {
  return {
    all: function() {
      var projectString = window.localStorage['projects'];
      if(projectString) {
        return angular.fromJson(projectString);
      }
      return [];
    },
    save: function(projects) {
      window.localStorage['projects'] = angular.toJson(projects);
    },
    newProject: function(projectTitle) {
      // Add a new project
      return {
        title: projectTitle,
        tasks: []
      };
    },
    getLastActiveIndex: function() {
      return parseInt(window.localStorage['lastActiveProject']) || 0;
    },
    setLastActiveIndex: function(index) {
      window.localStorage['lastActiveProject'] = index;
    }
  }
})

  .controller('homeMenuCtrl', function ($scope, $timeout, $ionicModal, Projects, $ionicSideMenuDelegate) {

    //storage

    // A utility function for creating a new project
  // with the given projectTitle
  var createProject = function(projectTitle) {
    var newProject = Projects.newProject(projectTitle);
    $scope.projects.push(newProject);
    Projects.save($scope.projects);
    $scope.selectProject(newProject, $scope.projects.length-1);
  }


  // Load or initialize projects
  $scope.projects = Projects.all();

  // Grab the last active, or the first project
  $scope.activeProject = $scope.projects[Projects.getLastActiveIndex()];

  // Called to create a new project
  $scope.newProject = function() {
    var projectTitle = prompt('Project name');
    if(projectTitle) {
      createProject(projectTitle);
    }
  };

      //my rooms

    $ionicModal.fromTemplateUrl('chatModal.html', function (modal) {
      $scope.taskModal = modal;
      console.log("chatModal.html loaded")
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });


    $scope.createTask = function(task) {
    if(!$scope.activeProject || !task) {
      return;
    }
    $scope.activeProject.tasks.push({
      title: task.title
    });
    $scope.taskModal.hide();

    // Inefficient, but save all the projects
    Projects.save($scope.projects);

    task.title = "";
  };


    // quit app
    $scope.quitApp = function () {
      console.log("quit")
    };

    $scope.toChatModal = function () {
      console.log("tochat modal")
      $scope.taskModal.show();
      document.getElementById('toChatDiv').style.display = 'block';
      document.getElementById('joinRoomDiv').style.display = 'none';
    }

     $scope.joinRoom = function () {
      console.log("joinRoom modal")
      $scope.taskModal.show();
      document.getElementById('toChatDiv').style.display = 'none';
      document.getElementById('joinRoomDiv').style.display = 'block';
    }

    $scope.toChat = function () {
      console.log("tochat")
      var room = Math.floor((Math.random() * 8999) + 999);
      createProject(room);
      window.location = "/pages/chat.html?room="+room;
    }

    $scope.toChat_join = function (room = 7860) {
      console.log("tochat join")
      window.location = "/pages/chat.html?room="+room;
    }

    // Called to select the given project
  $scope.selectProject = function(project, index) {
    $scope.activeProject = project;
    console.log("room selected "+project.title)
    Projects.setLastActiveIndex(index);
    $scope.toChat_join(project.title)
  };

    $scope.closeChatModal = function () {
      console.log("hide modal")
      $scope.taskModal.hide();
    }

    $scope.createRoom = function () {
      console.log("createRoom")
      window.location = "/pages/chat.html?room=7860"
    }
    
})


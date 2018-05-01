/*simple controllers to render basic profile information*/

var myApp = angular.module("userProfile", []);

/* can also be written as a single controller with a full data-set */

myApp.controller("profName", function ($scope) {
  $scope.first_name = "Kailash";
  $scope.last_name = "Sudhakar";
});

myApp.controller("profStats", function ($scope) {
  $scope.statusList = [
   { 
     sVal: '50',
     sName: 'Websites'
   },
   { 
     sVal: '15',
     sName: 'Tech Stacks'
   },
   { 
     sVal: '90',
     sName: 'Clients'
   },
  ];
});

myApp.controller("aboutMe", function ($scope) {
  $scope.about_me = "A masters graduate and accomplished web developer with 4+ years experience working in a plethora of web technologies. Well versed in the process of design, agile development, management and maintenance of complex web applications.";
});

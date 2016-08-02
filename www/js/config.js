app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('/', {
            url: '/',
            views: {
                "mainView": {
                    templateUrl: 'templates/vendor.html',
                    controller: 'mainCtrl'
                }
            }            
        });
    $urlRouterProvider.otherwise('/');
});

app.controller('mainCtrl', function($scope) {
    $scope.rating = 3;
    function defaultColor() {
        male.classList.add('is-active');
        female.classList.remove('is-active');
    }
    defaultColor();
    $scope.toggleColor = function () {
      var female = document.getElementById('female');
      var male = document.getElementById('male');
      if(male.classList.contains('is-active')) {
        male.classList.remove('is-active');
        female.classList.add('is-active');
      }
      else {
        male.classList.add('is-active');
        female.classList.remove('is-active');
      }
    }

    $scope.starRating = function(rating) {
      return new Array(rating);   //ng-repeat will run as many times as size of array
   }
});
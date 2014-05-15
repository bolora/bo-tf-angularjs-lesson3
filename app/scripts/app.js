'use strict';

angular.module('boTfAngularjsLesson2App', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('madlibController', function($scope){

    $scope.words = [
      { 
        name:"Verb",
        id:"verb1",
        value:"walk"
      },
      { 
        name:"Noun",
        id:"noun1",
        value:"ball"
      },
      { 
        name:"Noun",
        id:"noun2",
        value:"sun"
      },
      { 
        name:"Plural noun",
        id:"pnoun1",
        value:"birds"
      },
      { 
        name:"Adjective",
        id:"adjective1",
        value:"beautiful"
      },
      { 
        name:"Verb",
        id:"verb",
        value:"walk"
      },
      { 
        name:"Plural noun",
        id:"pnoun2",
        value:"birds"
      },
      { 
        name:"Plural noun",
        id:"pnoun3",
        value:"cows"
      },
      { 
        name:"Verb ending in -ing ",
        id:"verb2",
        value:"running"
      },
      { 
        name:"Verb",
        id:"verb3",
        value:"eat"
      },
      { 
        name:"Verb",
        id:"verb4",
        value:"walk"
      },
      { 
        name:"Noun",
        id:"noun3",
        value:"balloon"
      },
      { 
        name:"Large number",
        id:"number1",
        value:"one million"
      },
      { 
        name:"A profession or status (i.e. butcher or son)",
        id:"noun4",
        value:"lawyer"
      },
      { 
        name:"Noun",
        id:"noun5",
        value:"ocean"
      },
      { 
        name:"Adverb",
        id:"adverb1",
        value:"balloon"
      },
      { 
        name:"Verb",
        id:"verb5",
        value:"frown"
      },
      { 
        name:"Noun",
        id:"noun6",
        value:"hat"
      },
      { 
        name:"Plural noun",
        id:"pnoun4",
        value:"midgets"
      },
      { 
        name:"Past-tense verb",
        id:"verb6",
        value:"slept"
      },
      { 
        name:"Adjective",
        id:"adjective2",
        value:"great"
      },
      { 
        name:"Noun",
        id:"noun7",
        value:"bed"
      }
    ]
    $scope.madlib = {};
    $scope.update = function(){
      angular.forEach($scope.words, function(w){
        $scope.madlib[w.id]= w.value;
      })      
    }
    $scope.update();

  });

(function(){
    'use strict';
    
    angular.module('spinner', []);
    
    angular.module('spinner')
    .config(function () {
      console.log("Spinner config fired.");
    }).
    run(function () {
      console.log("Spinner run fired.");
    });
})();
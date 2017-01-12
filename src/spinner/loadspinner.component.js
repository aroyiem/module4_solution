(function(){
    'use strict';
    
    angular.module('spinner')
        .component('loadSpinner',{
            templateUrl:'src/spinner/loadspinner.template.html',
            controller: 'SpinnerController'
        });
        
})();
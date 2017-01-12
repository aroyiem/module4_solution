(function(){
    'use strict';
    
    //shows all available categories in the menu to the user.
    angular.module('data')
        .component('categoryList', {
            templateUrl:'src/resturantdetails/template/categorydetails.template.html',
            bindings:{
                categories:'<categories'
            }
        });
})();
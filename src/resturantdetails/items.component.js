(function(){
    'use strict';
    
    //shows all of the menu items for a particular category
    angular.module('data')
        .component('itemList', {
            templateUrl:'src/resturantdetails/template/itemdetails.template.html',
            bindings: {
                items: '<'
            }
        });
})();
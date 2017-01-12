(function(){
    'use strict';
    
    angular.module('data')
        .controller('CategoryItemListController', CategoryItemListController);
        
     CategoryItemListController.$inject=['items'];
     
     function CategoryItemListController(items){
         var itemList= this;
         
         itemList.items=items;
         
         console.log("mkakak" , itemList.items);
     }
})();
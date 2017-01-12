(function(){
    'use strict';
    
    angular.module('data')
        .controller('CategoryListController', CategoryListController);
        
    CategoryListController.$inject=['categories'];
    
    function CategoryListController(categories){
        var categoryList= this;
        
        categoryList.categories=categories;
        console.log("Hiiiii" , categoryList.categories);
    }
})();
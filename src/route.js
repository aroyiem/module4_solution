(function(){
    'use strict';
    
    angular.module('MenuApp').config(RouteConfig);
    
    RouteConfig.$inject=['$stateProvider', '$urlRouterProvider'];
    
    function RouteConfig($stateProvider, $urlRouterProvider){
        
        // redirects to home page if no url match is present
        $urlRouterProvider.otherwise('/');
        
        // setup UI states
        $stateProvider
        // home page
        .state('home', {
            url:'/',
            templateUrl:'src/resturantdetails/template/home.template.html'            
        })
        
        // category page
        .state('category', {
            url:'/categories',
            templateUrl:'src/resturantdetails/template/category.template.html',
            controller: 'CategoryListController as categoryList',
            resolve: {
                categories: ['MenuDataService', function(MenuDataService){
                     return MenuDataService.getAllCategories();
                }]
            }
        })
        
        // item list page
        .state('item', {
            url:'/items/{categoryId}',
            templateUrl:'src/resturantdetails/template/item.template.html',
            controller: 'CategoryItemListController as itemList',
            resolve:{
                items:['$stateParams','MenuDataService', function($stateParams, MenuDataService){
                        return MenuDataService.getItemsForCategory($stateParams.categoryId);
                }
                    
                ]
            }            
        });
        
    }
        
})();
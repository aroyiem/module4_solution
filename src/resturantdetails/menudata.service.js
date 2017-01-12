(function(){
    'use strict';
    
    angular.module('data')
        .service('MenuDataService', MenuDataService)
        .constant('MenuCategoryPath','https://davids-restaurant.herokuapp.com/categories.json')
        .constant('MenuCategoryItemsPath','https://davids-restaurant.herokuapp.com/menu_items.json?category=');
        
    MenuDataService.$inject=['$http', 'MenuCategoryPath', 'MenuCategoryItemsPath'];
    function MenuDataService($http, MenuCategoryPath, MenuCategoryItemsPath){
        
        var service = this;
        
        
        
        service.getAllCategories = function(){
            // https://davids-restaurant.herokuapp.com/categories.json
            var categories=[];
           return $http({
                url: MenuCategoryPath,
                method: 'get'                
            }).then(function success(response){
                console.log('reponse data:::', response.data);
                var res = response.data;
                
                angular.forEach(res, function(value, key){
                    categories.push(value);
                });
                return categories;
            }, 
            function error(error){
                console.log(error);
                throw new Error(error.message);
            });
            
        };
        
        service.getItemsForCategory= function(categoryShortName){
          
          //  https://davids-restaurant.herokuapp.com/menu_items.json?category=
          var items=[];
          return $http({
              url:MenuCategoryItemsPath,
              method:'get',
              params: {'category': categoryShortName}
          }).then(function success(response){
              console.log('reponse data::', response.data);
              var res = response.data.menu_items;
              
              angular.forEach(res, function(value, key){
                  items.push(value);
              });
              console.log("items",items)
              return items
          }, function error(error){
              console.log(error);
              throw new Error(error.message);
          });
        };
    }
})();
angular.module('app.routes',[])
  .config(function($stateProvider,$urlRouterProvider){
     $stateProvider
     .state('menu',{
     	url:'/menu',
     	templateUrl: 'templates/menu.html'

     })
       .state('menu.page',{
       	 url:'/index',
       	 views :{
       	 	'side-menu':{
       	 		templateUrl:'templates/page.html',
       	 		controller: 'pageCtrl'
       	 	}
       	 }
       });
    $urlRouterProvider.otherwise('#menu/index')
    
 });

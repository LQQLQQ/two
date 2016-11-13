var  myapp=angular.module('myapp',['ui.router']);//设置跳转页面
myapp.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state('index',{
            url:'/',
            templateUrl:'../html/home.html'

        })  .state('f1',{
        url:'/foodGI',
        templateUrl:'../html/foodGI.html'

    }) .state('f1.gushu',{
        url:'/gushu',
        templateUrl:'../html/gushu.html'

    })
       .state('f2',{
        url:'/foodChoose',
        templateUrl:'../html/foodChoose.html'

    }) .state('f3',{
        url:'/foodchengfen',
        templateUrl:'../html/foodchengfen.html'

    }) .state('f4',{
        url:'/energy',
        templateUrl:'../html/energy.html'

    }) .state('f5',{
        url:'/gushu',
        templateUrl:'../html/gushu.html'

    })
    $urlRouterProvider.when("",'/')

})
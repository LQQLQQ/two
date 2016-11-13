//用来做切换的 一个是全局 一个是服务用两种方法
function ctr($scope,$rootScope,$hight){
    $scope.flag = false;
    var arr= $hight._arr || [0,0,1,0,0];
    $scope.changegehight=function(num){
        arr=[0,0,0,0,0];
        arr[num]=1;
        $hight._arr=arr;
    };
    $scope.arr=arr;
}
//foodGI的页面渲染
function foodgi($http,$scope){
  var res= $http({
        method:"post",
        url:"../data/data.json"
    })
      res.success(function(e){
          if(e.error==0){
              $scope.datalist=e.data;
          }else{
              alert(e.message)
          }
       //console.log(datalist)
    });
    $scope.$on('search-result',function(a,data){
        $scope.datalist=[{"some":data}]

    })
    //渲染导航图片
    $scope.brr=[
        {"src":"images/sh_0503.png",
            "name":"豆制品"
        },
        {"src":"images/sh_0503.png",
            "name":"豆制品"
        },
        {"src":"images/sh_0503.png",
            "name":"豆制品"
        },
        {"src":"images/sh_0503.png",
            "name":"豆制品"
        },
        {"src":"images/sh_0503.png",
            "name":"豆制品"
        },
        {"src":"images/sh_0503.png",
            "name":"豆制品"
        },
        {"src":"images/sh_0503.png",
            "name":"豆制品"
        },
        {"src":"images/sh_0503.png",
            "name":"豆制品"
        },
        {"src":"images/sh_0503.png",
            "name":"豆制品"
        },{"src":"images/sh_0503.png",
            "name":"豆制品"
        },{"src":"images/sh_0503.png",
            "name":"豆制品"
        },{"src":"images/sh_0503.png",
            "name":"豆制品"
        },{"src":"images/sh_0503.png",
            "name":"豆制品"
        },{"src":"images/sh_0503.png",
            "name":"豆制品"
        },
        {"src":"images/sh_0503.png",
            "name":"豆制品"
        }
    ]
    var slides=null;
    setTimeout(function(){
        var mySwiper= new Swiper(".variety",{
            freeMode:true,
            slidesPerView:'auto',
            onTap:function(s,e){
                if(!slides) slides = document.querySelector('.variety').querySelectorAll('.swiper-slide');
                for(var i=0; i<slides.length; i++){
                    slides[i].className = slides[i].className.replace(' active','')
                }
                var str = s.clickedSlide && s.clickedSlide.className;
                if(str && str.indexOf(' active')==-1){
                    s.clickedSlide.className = str + ' active';
                }
                //调用实例化的swiper组件的slideTo方法，控制swipe组件滑动到点击的图片
                mySwiper.slideTo(s.clickedIndex,300,function () {
                });

            }
        })
    },100)

}
//cerears古署搜索页面
function cerears($scope,$state,$http){
    //获取数据
    var  _data=null;
    $http({
        method:"get",
        url:"../data/search.json"
    }).success(function(d){
       _data=d.data;
    });
    //返回上一页
    $scope.goFoodGI=function(data){
        console.log(data);
         $state.go('f1');

        $scope.$emit('search-result',data)
    };
    //获取到表单的值

    $scope.searchValue='小麦';
    $scope. $watch('searchValue',function(_new,_old){
        var arr=[];
        console.log(_new)
        if(_data!=null){
            _data.forEach(function(value,index){
                if(value[0].substring(0,_new.length)==_new || value[1].substring(0,_new.length)==_new || value[2].substring(0,_new.length)==_new){
                    arr.push( value[0])
                }

            })

        }
        $scope.searchData=arr;
    })



}
//点击出来底层 常见活动转化
function energy($scope,$state,$http,$slider){
    $scope.select=function(){
        $slider.show({
            title:"选择信息",
            data:['自行车','跑步','篮球','足球','瑜伽','跑步'],
            done:function(data){
                console.log(data);
               /* document.querySelector('.hit-me').innerHTML = data.valu*/e;
            }
        })

    }


}

var myapp=angular.module('myapp');
myapp.controller('index',ctr);
myapp.controller('foodGI',foodgi);
myapp.controller('cerears',cerears);
myapp.controller('energy',energy);



        /* 메뉴 */
        $(document).ready(function(){
            var mh;
            $(".menu, .subWrap ul").hover(function(){
                $("#sub").stop().slideDown(600);
                mh=$(this).index();
                $(".menuBox > li").eq(mh).addClass("on");
                $(".menuBox > li").eq(mh).siblings().removeClass("on");
            });
            $(".menu, .subWrap ul").mouseleave(function(){
                $("#sub").stop().slideUp(250);
                $(".menuBox > li").removeClass("on");
            });
        });
        
        
        
        
        /*콜메뉴*/
        $(document).ready(function(){
            $(".mMenu").click(function(){
                $(".collWrap, .cover, .cover1").addClass("on")
                $(".logo, .mMenu, .searchBtn").css("z-index", "0")
            });
        });
        
        $(document).ready(function(){
           $(".back").click(function(){
                $(".logo, .mMenu, .searchBtn").css("z-index", "2")
                $(".collWrap, .cover, .cover1").removeClass("on")
           });
        });
        $(document).ready(function(){
           $(".cover, .cover1").click(function(){
                $(".logo, .mMenu, .searchBtm").css("z-index", "2")
                $(".collWrap, .cover, .cover1") .removeClass("on")
           });
        });
        
        
        /*콜메뉴 세부*/
        $(document).ready(function(){
            $(".mGnb li").click(function(){
                $(this).find(".mSubList").stop().slideToggle(600)
            });
        });
        
        
        
        
        
    
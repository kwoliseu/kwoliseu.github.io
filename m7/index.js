
        /* 배너1 */
        $(document).ready(function(){
            var wd = parseInt($(".banner1").width()); //보여줄 화면
            /*wd는 내가 임의로 정해준 함수명(?)*/
            var cnt = $(".bWrap1 li").length;
            var intv = setInterval(function(){
                slide();    /*slide도 내가 임의로 정해준 함수명. 이것을 2초동안 반복해라*/
            }, 2000);
            
            function slide(){
                $(".bWrap1").not(":animated").animate({
                    "margin-left": - wd + "px"
                }, 800, function(){
                    $(".bWrap1 li").eq(0).appendTo($(".bWrap1"));
                    $(".bWrap1").css("margin-left", "0px");
                });
            };
        });
        
        
        /* 배너2 */
        $(document).ready(function(){
            var wd = parseInt($(".banner2").width()); //보여줄 화면
            /*wd는 내가 임의로 정해준 함수명(?)*/
            var cnt = $(".bWrap2 li").length;
            var intv = setInterval(function(){
                slide();    /*slide도 내가 임의로 정해준 함수명. 이것을 2초동안 반복해라*/
            }, 2000);
            
            function slide(){
                $(".bWrap2").not(":animated").animate({
                    "margin-left": - wd + "px"
                }, 800, function(){
                    $(".bWrap2 li").eq(0).appendTo($(".bWrap2"));
                    $(".bWrap2").css("margin-left", "0px");
                });
            };
        });
        
        
        
        /* 메뉴 */
        $(document).ready(function(){
            $(".menu").click(function(){
               $(".collMenu").addClass("on");
               $(".unMenu").addClass("on");
               $(".cover").addClass("on");
            });
        });
        
        $(document).ready(function(){
            $(".back").click(function(){
                $(".collMenu").removeClass("on")
               $(".unMenu").removeClass("on");
               $(".cover").removeClass("on");
            });
            $(".cover").click(function(){
                $(".collMenu").removeClass("on")
               $(".unMenu").removeClass("on");
               $(this).removeClass("on");
            });
        })
        
        
        
        
		/* 아코디언 메뉴 */
		/*
        $(".collList li").click(function(){
  			 $(".collList li").find(".subList").css("display", "none");
			 $(this).find(".subList").slideDown(600);
		});
        */
        /*
        $(".collMain").click(function(){
            $(".collMain .subList").css("display", "none");
            $(this).find(".subList").slideDown(600);
        });
        */
        
        
        
    
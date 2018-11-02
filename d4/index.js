
        $(document).ready(function(){
            $(".grid1 a").mouseover(function(){
               $(".grid2Color").css("opacity", "0");
            });
            $(".grid1 a").mouseleave(function(){
                $(".grid2Color").css("opacity", "1");
            });
            $(".grid4 a").mouseover(function(){
               $(".grid3Color").css("opacity", "0");
            });
            $(".grid4 a").mouseleave(function(){
                $(".grid3Color").css("opacity", "1");
            });
            $(".grid5 a").mouseover(function(){
               $(".grid5Color").css("opacity", "0");
            });
            $(".grid5 a").mouseleave(function(){
                $(".grid5Color").css("opacity", "1");
            });
        });
        
        $(document).ready(function(){
            var wd = parseInt($(".vsimg").width()); //보여줄 화면
            /*wd는 내가 임의로 정해준 함수명(?)*/
            var cnt = $(".item").length;
            var intv = setInterval(function(){
                slide();    /*slide도 내가 임의로 정해준 함수명. 이것을 2초동안 반복해라*/
            }, 3000);
            
            function slide(){
                $(".imgList").not(":animated").animate({
                    "margin-left": - wd + "px"
                }, 800, function(){
                    $(".item").eq(0).appendTo($(".imgList"));
                    $(".imgList").css("margin-left", "0px");
                });
            };
        });
    
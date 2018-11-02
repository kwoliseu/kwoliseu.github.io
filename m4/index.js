
        /*슬라이드*/
        $(document).ready(function(){
            var wd = parseInt($(".vsList").width());
            var cnt = $(".vsBox li").length;
            var intv = setInterval(function(){
                slide();
            }, 2500);
            
            function slide(){
                $(".vsBox").not(":animated").animate({
                    "margin-left": - wd + "px"
                }, 800, function(){
                    $(".vsBox li").eq(0).appendTo($(".vsBox"));
                    $(".vsBox").css("margin-left", "0px");
                });
            };
        });
        
        /*사진 동영상 on클래스*/
        $(document).ready(function(){
           $(".poto").click(function(){
               $(".video").removeClass("on");
               $(".videoCon").removeClass("on");
               $(this).addClass("on");
               $(".potoCon").addClass("on")
           });
        });
        
        $(document).ready(function(){
           $(".video").click(function(){
               $(".poto").removeClass("on");
               $(".potoCon").removeClass("on");
               $(this).addClass("on");
               $(".videoCon").addClass("on")
           });
        });
        
        /*콜메뉴*/
        $(document).ready(function(){
            $(".menu").click(function(){
                $(".collMenu").addClass("on")
            });
        });
        $(document).ready(function(){
            $(".back").click(function(){
                $(".collMenu").removeClass("on")
            });
        });
        
    

        $(document).ready(function(){
            $(".left li").click(function(){
                
                var eqBtn = $(this).index();
                
                $(this).addClass("on");
                $(this).siblings().removeClass("on");
                
                $(".leftBtn p").removeClass("on")
                $(this).find("p").addClass("on")
                
                $(".right > ul").eq(eqBtn).addClass("on");
                $(".right > ul").eq(eqBtn).siblings().removeClass("on");
                
            }); 
        });
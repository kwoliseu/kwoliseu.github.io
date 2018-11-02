
        $(document).ready(function(){
            $(".cover div").css("width", "0%");
            $(".ps .cover > div").stop().animate({width : "95%"},500);
            $(".ai .cover > div").stop().animate({width : "85%"},700);
            $(".html5 .cover > div").stop().animate({width : "80%"},900);
            $(".css .cover > div").stop().animate({width : "80%"},1100);
            $(".jj .cover > div").stop().animate({width : "65%"},1300);
        });
    
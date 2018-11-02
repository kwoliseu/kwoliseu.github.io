
        /* 메뉴 슬라이드 */
        $(document).ready(function(){
            $(".menuList li").click(function(){
                $(this).find("p").toggleClass("on")
                $(this).find(".subList").stop().slideToggle(400)
            });
        });
        
        /* 서브메뉴 컬러 */
        $(document).ready(function(){
            $(".subList li").hover(function(){
                $(this).find("a").stop().css('color', '#f37524')
            });
            $(".subList li").mouseleave(function(){
                $(this).find("a").stop().css('color', '#000')
            });
        });
    
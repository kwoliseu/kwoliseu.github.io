
        
        $(document).ready(function(){
            $(".con1Wrap .btnBox li").click(function(){
                
                var eqBtn = $(this).index();
                var eqLst = $(".con1Wrap .listBox div").index();
                
                $(this).addClass("on");
                $(this).siblings().removeClass("on");
                $(".con1Wrap .listBox > div").eq(eqBtn).addClass("on");
                $(".con1Wrap .listBox  > div").eq(eqBtn).siblings().removeClass("on");
                
            });
            $(".con2Wrap .btnBox li").click(function(){
                
                var eqBtn = $(this).index();
                var eqLst = $(".con2Wrap .listBox div").index();
                
                $(this).addClass("on");
                $(this).siblings().removeClass("on");
                $(".con2Wrap .listBox > div").eq(eqBtn).addClass("on");
                $(".con2Wrap .listBox  > div").eq(eqBtn).siblings().removeClass("on");
                 
            });
            $(".con3Wrap .btnBox li").click(function(){
                
                var eqBtn = $(this).index();
                var eqLst = $(".con3Wrap .listBox div").index();
                
                $(this).addClass("on");
                $(this).siblings().removeClass("on");
                $(".con3Wrap .listBox > div").eq(eqBtn).addClass("on");
                $(".con3Wrap .listBox  > div").eq(eqBtn).siblings().removeClass("on");
                
            });
        });
        
        
        
        $(document).ready(function () {
        	var sc_pg = parseInt($(window).height());
			$(window).on('mousewheel', function(e){
				if(e.originalEvent.wheelDelta < 0) {
					$('html, body').not(":animated").animate({
                        scrollTop : '+='+sc_pg+'px'},800);
				} else {
					$('html, body').not(":animated").animate({
                        scrollTop : '-='+sc_pg+'px'},800);
				}
				return false;
			});
		});
        
    
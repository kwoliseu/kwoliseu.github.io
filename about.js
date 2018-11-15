
        $(document).ready(function(){
            $(".logo2, .my, .text").hide();
            $(".logo2").fadeIn(1000);
            $(".my, .text").delay(500).fadeIn(800);
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
        

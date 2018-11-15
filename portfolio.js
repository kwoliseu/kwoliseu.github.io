$(document).ready(function(){
    $(".allBtn p").click(function(){
        $(".topWrap li p").removeClass("on")
        $(this).addClass("on")
        
        $(".cardList div").removeClass("off")
    });
    
    
    $(".dtBtn p").click(function(){
        $(".topWrap li p").removeClass("on")
        $(this).addClass("on")
        
        $(".cardList div").removeClass("off")
        $(".cardList .mb, .cardList .rs").addClass("off")
    });
    
    
    $(".mbBtn p").click(function(){
        $(".topWrap li p").removeClass("on")
        $(this).addClass("on")
        
        $(".cardList div").removeClass("off")
        $(".cardList .rs, .cardList .dt").addClass("off")
    });
    
    
    $(".rsBtn p").click(function(){
        $(".topWrap li p").removeClass("on")
        $(this).addClass("on")
        
        $(".cardList div").removeClass("off")
        $(".cardList .mb, .cardList .dt").addClass("off")
    });
});

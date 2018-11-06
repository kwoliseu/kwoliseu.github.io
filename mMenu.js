$(document).ready(function(){
    $(".mMenu").click(function(){
        $(".collMenu").css('margin-left', '0%');
        $(this).css('display', 'none');
    });
    $(".back").click(function(){
        $(".collMenu").css('margin-left', '-120%');
        $(".mMenu").css('display', 'block');
    })
});
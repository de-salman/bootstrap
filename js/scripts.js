$(document).ready(function(){
    $("#loginButton").click(function(){
        $("#loginModal").css("display","block")
    });
    $(".loginCloss").click(function(){
        $("#loginModal").css("display","none")
    });
    $("#reserveButton").click(function(){
        $("#reserve").css("display","block")
    });
    $(".reserveCloss").click(function(){
        $("#reserve").css("display","none")
    });

    
    
    $('.carousel').carousel({
        interval: 2000
      })
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');                    
        }
    });
});
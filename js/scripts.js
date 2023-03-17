$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carousel-pause").click(function(){
        $("#mycarousel").carousel('pause');
    });
    $("#carousel-play").click(function(){
        $("#mycarousel").carousel('cycle');
    });

    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fapause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fapause');
            $("#carouselButton").children("span").addClass('faplay');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('faplay');
            $("#carouselButton").children("span").addClass('fapause');
        }
    });
       

    $("#reserveBtn").click(function(){
        $("#reserveModal").modal("show");
    });
    $("#reserveClose").click(function(){
        $("#reserveModal").modal("hide");
    });
    $("#reserveClose2").click(function(){
        $("#reserveModal").modal("hide");
    });


    $("#loginBtn").click(function(){
        $("#loginModal").modal("show");
    });
    $("#loginClose").click(function(){
        $("#loginModal").modal("hide");
    });
    $("#loginClose2").click(function(){
        $("#loginModal").modal("hide");
    });
});

src="node_modules/jquery/dist/jquery.slim.min.js"
src="node_modules/popper.js/dist/umd/popper.min.js"
src="node_modules/bootstrap/dist/js/bootstrap.min.js"
src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"

$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carousel-pause").click(function(){
        $("#mycarousel").carousel('pause');
    });
    $("#carousel-play").click(function(){
        $("#mycarousel").carousel('cycle');
    });
});
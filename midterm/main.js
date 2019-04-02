
$(document).ready(function(){
    $('.carousel').carousel({
        interval:   2000, 
        keyboard:   true
    });

    $('.carousel-pauser').click(function(){
        $('.carousel').carousel('pause');
    });

    $('.carousel').on('slid.bs.carousel', function(event){
        console.log(event);
    });


}); 

$(document).ready(function (){
    $(".open").click(function (){
        $(".pop-outer").fadeIn("slow");
    });
    $(".close").click(function (){
        $(".pop-outer").fadeOut("slow");
    });
});


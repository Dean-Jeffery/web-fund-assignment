$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".navigation").addClass("background-shadow");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".navigation").removeClass("background-shadow");
        }
    });
});
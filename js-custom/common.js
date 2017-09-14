$(document).ready(function() {
    $('.hides-answer').hide();
    $(".question__item").click(function () {
        $(this).parent().toggleClass("substrate-question");
        $(this).children(".question").toggleClass("question-open").next().slideToggle(300);
    });
    $(".parameter__item_name").click(function () {
        $(this).toggleClass("parameter-active");
        $(this).next().slideToggle(300);
    })
    $(".list-item_link").click(function () {
        var imgLink = $(this).children("img").attr("data-image");
        $(this).parent().parent().prev().children("img").attr("src",imgLink);
    })
});

$( document ).ready(function() {

    var scr_w=screen.width;
    if (scr_w < 1200) {
        $( ".cross" ).hide();
        $( ".nav" ).hide();
        $( ".hamburger" ).click(function() {
            $( ".nav" ).slideToggle( 400, function() {
                $( ".hamburger" ).hide();
                $( ".cross" ).show();
            });
        });

        $( ".cross" ).click(function() {
            $( ".nav" ).slideToggle( 400, function() {
                $( ".cross" ).hide();
                $( ".hamburger" ).show();
            });
        });
    }



});
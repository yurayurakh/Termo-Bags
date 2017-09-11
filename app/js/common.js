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
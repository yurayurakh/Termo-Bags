$(document).ready(function() {
    $('.hides-answer').hide();
    $(".question__item").click(function () {
        $(this).parent().toggleClass("substrate-question");
        $(this).children(".question").toggleClass("question-open").next().slideToggle(300);
    })
});
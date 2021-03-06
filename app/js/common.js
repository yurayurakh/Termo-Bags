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
$(document).ready(function() {
    $("a.scroll-to").click(function() {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 800);
        return false;
    });
});
(function(){

    var app = {

        initialize : function () {
            this.setUpListeners();
        },

        setUpListeners : function () {
            $('form').on('submit', app.submitForm);
            $('form').on('keydown', 'input', app.removeError);
        },

        submitForm : function (e) {
            e.preventDefault();

            var form = $(this),
                submitBtn = form.find('input[type="submit"]');

            if ( app.validateForm(form) === false ) return false;

            submitBtn.attr('disabled', 'disabled');

            var str = form.serialize();

            $.ajax ({
                url: 'contact_form/contact_process.php',
                type: 'POST',
                data: str
            })
                .done(function(msg){
                    if(msg === "OK"){
                        setTimeout(function(){
                            $('.close-modal').click();
                        }, 150);
                        setTimeout(function(){
                            $('.success-modal').click();
                        }, 500);
                        setTimeout(function(){
                            $('.close-modal').click();
                        }, 3000);
                    } else {
                        form.html(msg);
                    }
                })
                .always(function(){
                    submitBtn.removeAttr('disabled');
                });
        },

        validateForm : function (form) {
            var inputs = form.find('input'),
                valid = true;

            $.each(inputs, function(index, val) {
                var input = $(val),
                    val = input.val(),
                    formGroup = input.parents('.form-group');

                if (val.length === 0) {
                    formGroup.addClass('has-error').removeClass('has-success');
                    valid = false;
                }else {
                    formGroup.addClass('has-success').removeClass('has-error');
                }
            });

            return valid;
        },

        removeError : function () {
            $(this).parents('.form-group')  .removeClass('has-error')
        }
    }

    app.initialize();

}());

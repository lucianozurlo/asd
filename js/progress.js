

$(function () {

    $('.progressIcon').each(function(){
        
        let divProgress = $('<div></div>').css({'position': 'relative', 'display' : 'table'}).addClass("progressIcon");
        $(this).removeClass('progressIcon');

        $(this).wrap(divProgress);

        //clone the icon to put it in the background
        let cloneGray = $(this).clone().addClass($(this).attr('class'));
        $(this).css({"position" : "absolute", "color" : $(this).data("color"), 'z-index' : 2});
        cloneGray.css({'opacity': '0.15', 'display': 'block'});
        $(this).after(cloneGray);

        //trigger an animation or not
        let animation = parseInt($(this).data("animation"))
        if (animation > 0){
            if ($(this).offset().top > $(window).scrollTop() && $(this).offset().top < $(window).scrollTop()+$(window).height()) anim($(this));
            else $(this).addClass("animationProgress");
        } else {
            $(this).css('clip-path', `inset(${100-parseInt($(this).data("percent"))}% 0% 0% 0%)`);
        }

    });

    function anim(elem){
        $(elem).css('clip-path', `inset(100% 0% 0% 0%)`).animate({someValue: parseInt($(elem).data("percent"))}, {
            duration: parseInt($(elem).data("animation")),
            step: function(someValue) {$(elem).css('clip-path', `inset(${100-someValue}% 0% 0% 0%)`)}
        }).delay(800);
    }

    $(window).scroll(function () {
        $('.animationProgress').each(function(){
            if ($(this).offset().top > $(window).scrollTop() && $(this).offset().top < $(window).scrollTop()+$(window).height()){
                anim($(this));
                $(this).removeAttr('class', 'animationProgress');
            }
        })
    });

})
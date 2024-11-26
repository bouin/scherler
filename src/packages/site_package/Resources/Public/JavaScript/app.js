
$('#owl-scherler').owlCarousel({
    loop: true,
    margin: 10,
    animateOut: 'fadeOut',
    dots:true,
    responsiveClass: true,
    dotData: true,
    dotsData: true,
    responsive: {
        0: {
            items: 1,
            margin: 0,
            dots:true,
            autoplay: true,
            autoHeight: true,
            autoplayTimeout: 5500,
            animateOut: 'fadeOut',
            smartSpeed: 600
        }
    }
})
$('a.submen[href*=\\#]:not([href=\\#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        console.log(target);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top - 30
            }, 800);
            return false;
        }
    }
});

$('#c345 a[href*=\\#]:not([href=\\#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top - 30
            }, 800);
            return false;
        }
    }
});
$('#collapse-only-here a').click(function() {
    $(this).text($(this).text() == 'Weniger' ? 'Mehr' : 'Weniger');

});

$(document).ready(function() {

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        slidesPerColumn: 1,
        spaceBetween: 30,
        touchRatio: 0.2,
        threshold: 10,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    $("#go-top").click(function() {
        $("html,body").animate({ scrollTop: 0 }, 500);
    });

    $("h1").removeAttr("style");


    var t=0; // the height of the highest element (after the function runs)
    var t_elem;  // the highest element (after the function runs)
    $('.overlay.handy h2').each(function () {

        $this = $(this);
        if ( $this.outerHeight() > t ) {
            t_elem = this;
            t = $this.outerHeight();
        }

    });

    $('.overlay.handy').css('height', t);

    $(window).resize(function() {

        var t=0; // the height of the highest element (after the function runs)
        var t_elem;  // the highest element (after the function runs)

        $('.overlay.handy h2').each(function () {

            $this = $(this);
            if ( $this.outerHeight() > t ) {
                t_elem = this;
                t = $this.outerHeight();
            }

        });

        $('.overlay.handy').css('height', t);
    });


    if($('#c1368 p a').length){

    } else {
        $('#c1368 p').hide();
    }


});

$(document).scroll(function() {
    var position = $(this).scrollTop();
    if (position > 500) {
        $("#go-top").show();
    } else {
        $("#go-top").hide();
    }
});
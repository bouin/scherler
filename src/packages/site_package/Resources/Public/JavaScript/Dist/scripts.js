function scrollFunction() {
    if (window.scrollY > 700) {
        document.getElementById("nav-nav-ok").classList.add('just-do-it');
    } else {
        document.getElementById("nav-nav-ok").classList.remove('just-do-it');
    }
}
window.onscroll = function() {
    scrollFunction()
};

$(document).ready(function() {
    var t=0; // the height of the highest element (after the function runs)
    var t_elem;  // the highest element (after the function runs)
    var $window = $(window);
    var windowsize = $window.width();

    $(".same-height").each(function () {
        $this = $(this);
        if ( $this.outerHeight() > t ) {
            t_elem=this;
            t=$this.outerHeight();
        }
    });
    if (windowsize > 768) {
        $('.same-height').css('height', t);
    } else {
        $('.same-height').css('height', '');
    }

    $(window).resize(function(){
        var windowsize = $window.width();
        $(".same-height").each(function () {
            $this = $(this);
            if ( $this.outerHeight() > t ) {
                t_elem=this;
                t=$this.outerHeight();
            }
        });
        if (windowsize > 768) {
            $('.same-height').css('height', t);
        } else {
            $('.same-height').css('height', '');
        }
    });

    var t2=0; // the height of the highest element (after the function runs)
    var t_elem2;  // the highest element (after the function runs)

    $(".same-height-2").each(function () {
        $this2 = $(this);
        if ( $this2.outerHeight() > t2 ) {
            t_elem2=this;
            t2=$this2.outerHeight();
        }
    });
    if (windowsize > 992) {
        $('.same-height-2').css('height', t2);
    } else {
        $('.same-height-2').css('height', '');
    }

    $(window).resize(function(){
        var windowsize = $window.width();
        $(".same-height-2").each(function () {
            $this2 = $(this);
            if ( $this2.outerHeight() > t2 ) {
                t_elem2=this;
                t2=$this2.outerHeight();
            }
        });
        if (windowsize > 992) {
            $('.same-height-2').css('height', t2);
        } else {
            $('.same-height-2').css('height', '');
        }
    });

    $('.i-want-to-click').on('click', function (){
        $('.navbar .collapse.show').collapse('hide');
    })

    $('#navbarSupportedContent').on('show.bs.collapse',function (){
        $('body').addClass('modal-open');
    })
    $('#navbarSupportedContent').on('hide.bs.collapse',function (){
        $('body').removeClass('modal-open');
    })


    var width = $(window).width();
    if(width<992){
        if(!$('body').hasClass('modal-open')) {
            $('body').addClass('closed');
        }
        setTimeout(function(){
            if(!$('body').hasClass('modal-open')){
                $('body').removeClass('closed');
            }
        },100);
    }
    if(width>992){
        $('body').removeClass('closed');
    }

    $( window ).resize(function() {
        var width = $(window).width();

        if(width<992){

            if(!$('body').hasClass('modal-open')) {
                $('body').addClass('closed');
            }
            setTimeout(function(){
                if(!$('body').hasClass('modal-open')){
                    $('body').removeClass('closed');
                }
            },100);
        }
        if(width>992){
            $('body').removeClass('closed');
        }
    });



    $('a.nav-link').on('click', function (){
        if($('body').hasClass('modal-open')) {
            $('body').removeClass('modal-open');
        }
    })


    var menuHeight = $('nav').outerHeight();

    if (location.hash){
        var hash = location.hash;
        if (hash == '#c420') {
            setTimeout(
                function()
                {
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top - 50
                    }, 800);
                }, 100);
        } else {
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 50
            }, 800);
        }
    }

    // Add smooth scrolling to all links
    $("a.scrollme").on('click', function(event) {
        if (this.hash !== "" && this.hash.indexOf("#tl-") !== 0 && $(this).attr("href").indexOf("#") == 0) {
            event.preventDefault();
            $("#main-navi-checkbox").prop("checked", false);
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 50
            }, 400 /*, function(){
				window.history.pushState('', $("title").text(), hash);
			}*/);
        }
    });

    /*$( "#powermail_field_marker" ).datepicker.parseDate( "yy-mm-dd", "2007-01-26" );*/


});




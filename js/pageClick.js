$(document).ready(function() {
    $("#index").click(function() {
        $("#secondNav").css({
            "display": "block"
        });
        $(this).css({
            "color": "#42a1ec"
        });
    });
    //er ji dao hang lan
    var fullPage = $(document).scrollTop();
    var secondNav = $('.secondNav').outerHeight();
    // $(window).scroll(function() {
    // 	var scrollTop = $(document).scrollTop();
    // 	// console.log(fullPage);
    // 	if (fullPage > 400) {
    // 		$('.secondNav').css({
    // 			"display": "block"
    // 		});
    // 	}

    // 	if (scrollTop > secondNav) {
    // 		$('.secondNav').addClass('hide');
    // 	} else {
    // 		$('.secondNav').removeClass('hide');
    // 	}

    // 	if (scrollTop > fullPage) {
    // 		$('.secondNav').removeClass('show');
    // 	} else {
    // 		$('.secondNav').addClass('show');
    // 	}
    // 	if (fullPage < 400) {
    // 		$('.secondNav').css({
    // 			"display": "none"
    // 		});
    // 	}
    // 	fullPage = $(document).scrollTop();

    // });
    var p = 0,
        t = 0;
    $(window).scroll(function() {

        if (fullPage > 740) {
            $(".scrollTop").addClass("scrollTopShow").removeClass("scrollTopHide");
        } else {
            $(".scrollTop").addClass("scrollTopHide").removeClass("scrollTopShow");
        }
        var scrollTop = $(document).scrollTop();
        p = $(this).scrollTop();

        if (t <= p) { //下滚

        } else { //上滚
            $(".secondNav").css({
                "position": "fixed",
                "top": "0px",
                "left": "0px"
            });
            if ($(window).scrollTop() < 450) {
                $(".secondNav").css({
                    "position": "static"
                });
            }
        }
        setTimeout(function() {
            t = p;
        }, 0);
        fullPage = $(document).scrollTop();

    });

    //hui dao dingbu
    $(".scrollTop").bind('click', function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500);
    });
})
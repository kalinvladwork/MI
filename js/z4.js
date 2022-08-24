$(document).ready(function() {
    $(".section:eq(0)").addClass("current");
    $(".part011").removeClass("guang");
    $(".split").css("height", $(window).height());
    $(".section02").css("height", $(window).height() * 7);

    showBuy();
    var video = document.getElementById("video");
    video.addEventListener('ended', function() {
        $(".part011").addClass("guang");
    });
    //窗口滚动
    var initTop = 0;
    $(window).scroll(function() {
        showBuy();
        var scrollTop = $(window).scrollTop();
        if (scrollTop > initTop) {
            scollFunc(1); //向下
        } else {
            scollFunc(2); //向上
        }
        initTop = scrollTop;
    });

    $(window).resize(function() {
        $(".split").css("height", $(window).height());
        $(".section02").css("height", $(window).height() * 7);
    });
    //机器随鼠标移动
    $(".section04").mousemove(function(event) {
        translateX = ((1920 - $(window).width()) / 2 + event.pageX);
        translateX = translateX < 1560 ? (translateX > 360 ? translateX : 360) : 1560;
        $(".part26").css({
            "transform": "translateX(" + translateX + "px)",
            "-webkit-transform": "translateX(" + translateX + "px)"
        });
        angle = ((960 - translateX) / 20).toFixed(1);
        angle = angle < 30 ? (angle > -30 ? angle : -30) : 30;
        $(".part25").css({
            "transform": "rotate(" + angle * 1.5 + "deg)",
            "-webkit-transform": "rotate(" + angle * 1.5 + "deg)"
        })
        angle = Math.abs(angle);
        $(".part24").css({
            "transform": "scale(" + (1 - (angle / 900)) + ")",
            "-webkit-transform": "scale(" + (1 - (angle / 900)) + ")"
        });
        $(".part27 span").html(angle + "°");
    });
});

function scollFunc(p) {
    var winRange = {
        top: $(window).scrollTop(),
        bottom: $(window).scrollTop() + $(window).height()
    };
    var sec1 = $(".section02").offset().top;
    var sec2 = $(".section03").offset().top - $(window).height();

    if (winRange.top > sec1 && winRange.top < sec2) {
        $(".split").removeClass("nofixed");
        $(".split").addClass("fixed");
    } else {
        $(".split").removeClass("fixed");
        $(".split").addClass("nofixed");
        if (winRange.top > sec2) {
            $(".split").addClass("bot");
        }
        if (winRange.top < sec1) {
            $(".split").removeClass("bot");
        }
    }

    var temp = Math.floor((winRange.top - sec1) / $(window).height()) + 1;
    $(".s").each(function() {
        if ($(this).index() == temp) {
            $(this).removeClass('ac2');
            $(this).addClass('ac1');
        } else if ($(this).index() < temp) {
            $(this).removeClass('ac1');
            $(this).addClass('ac2');
        } else {
            $(this).removeClass('ac2');
            $(this).removeClass('ac1');
        }
    });

    $(".section").each(function() {
        if (winRange.bottom >= $(this).offset().top + $(window).height() / 2.3 && winRange.top < $(this).offset().top + $(window).height() / 2.3) {
            $(this).addClass("current");
        }
    });
}

function showBuy() {
    if ($(window).scrollTop() > 600) {
        console.log("sds");
        $(".buy-con").show();
    } else {
        $(".buy-con").hide();
    }
}
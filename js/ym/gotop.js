function loadJS(url, callback) {
    var script = document.createElement('script')
    var fn = callback || function () { };
    script.type = 'text/javascript';
    if (script.readyState) {
        script.onreadystatechange = function () {
            if (script.readyState == 'loaded' || script.readyState == 'complete') {
                script.onreadystatechange = null;
                fn();
            }
        };
    } else {
        script.onload = function () {
            fn();
        };
    }
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}
!(function () {
    loadJS("https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js", () => {
        gotoTop1();
        var username = '钱辉';
        var usertext = "一支穿云箭，千军万马来相见！";
        var consoleA = "color:#fff;background:#6cf;padding:5px 0;border: 1px solid #6cf;";
        var consoleB = "color:#6cf;background:none;padding:5px 0;border: 1px solid #6cf;";
        console.log(`\n %c ${username} %c ${usertext}`, consoleA, consoleB);
        gotop1();
    })
})();
function gotop1() {
    var gotop_width="30px";
    var gotop_height="30px";
    var gotop_border_radius="30%";
    var gotop_body_color="#000000";//#6cf
    var gotop_svg_color="#000000";//#6cf

    $("body").append(`
    <div id="goToTop">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20">
        <g fill="none">
            <path
                d="M6.03 7.03a.75.75 0 0 1-1.06-1.06l4-4a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1-1.06 1.06l-2.72-2.72v5.44c0 1.947.245 3.321.74 4.366c.486 1.026 1.243 1.8 2.396 2.49a.75.75 0 1 1-.772 1.287c-1.347-.808-2.34-1.785-2.98-3.134c-.63-1.33-.884-2.956-.884-5.009V4.31L6.03 7.03z"
                fill="currentColor"></path>
        </g></svg></div>`);
        $('#goToTop').css({"position": "fixed", "right":"20px","bottom":"50px","cursor":"pointer","width":`${gotop_width}`,"height":`${gotop_height}`,"border":`4px ${gotop_body_color} solid`,"border-radius":`${gotop_border_radius}`});
        $("#goToTop svg").css({"width": `${gotop_width}`, "height": `${gotop_height}`,"color":`${gotop_svg_color}`});
    $('#goToTop').gotoTop({
        offset: 250, //距离顶部的位置
        speed: 300, //移动到顶部的速度
        iconSpeed : 300, //icon动画样式的速度*/
        animationShow: {
            'transform': 'translate(0,0)',
            'transition': 'transform .5s ease-in-out'
        }, //icon动画样式显示时
        animationHide: {
            'transform': 'translate(80px,0)',
            'transition': 'transform .5s ease-in-out'
        } //icon动画样式隐藏时
    });
}
function gotoTop1() {
    (function ($) {
        jQuery.fn.gotoTop = function (opt) {
            var ele = this;
            var win = $(window);
            var doc = $('html,body');
            var index = false;
            var defaultOpt = {
                offset: 420,
                speed: 500,
                iconSpeed: 200,
                animationShow: { 'opacity': '1' },
                animationHide: { 'opacity': '0' }
            };
            var options = $.extend(defaultOpt, opt);
            ele.click(function () {
                doc.animate({ scrollTop: '0' }, options.speed);
            });
            $.each(options.animationShow, function (i) {
                if (i == 'transform') {
                    index = true;
                }
            });
            function animateShow() {
                if (index) {
                    ele.css(options.animationShow);
                } else {
                    ele.stop().animate(options.animationShow, options.iconSpeed);
                }
            }
            function animateHide() {
                if (index) {
                    ele.css(options.animationHide);
                } else {
                    ele.stop().animate(options.animationHide, options.iconSpeed);
                }
            }
            win.scroll(function () {
                if (win.scrollTop() > options.offset) {
                    animateShow();
                } else {
                    animateHide();
                }
            });
            if (win.scrollTop() > options.offset) {
                ele.css(options.animationShow);
            } else {
                ele.css(options.animationHide);
            }
        }
    }(jQuery));
}
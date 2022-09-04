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
        var username = '钱辉';
        var usertext = "一支穿云箭，千军万马来相见！";
        var consoleA = "color:#fff;background:#6cf;padding:5px 0;border: 1px solid #6cf;";
        var consoleB = "color:#6cf;background:none;padding:5px 0;border: 1px solid #6cf;";
        console.log(`\n %c ${username} %c ${usertext}`, consoleA, consoleB);
        lianyi();
    })
})();

function lianyi() {
    $(document).click(function (e) {
        var lysize = 50;
        var lycolor = "	#00FFFF";
        
        $('body').append("<div class='liany'>");
        $('.liany').css({
            position: 'fixed',
            left: e.clientX,
            top: e.clientY,
            borderRadius: lysize + 'px',
            border: `1px solid ${lycolor}`,
        }).stop().animate({
            width: lysize,
            height: lysize,
            left: e.clientX - lysize / 2,
            top: e.clientY - lysize / 2,
            opacity: '0'
        }, function () {
            $('body .liany').remove()
        })
    })
}
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
        var username = '钱辉'; var usertext = "一支穿云箭，千军万马来相见！";
        var userurl = "https://github.com/quinhua";
        var consoleA = "color:#fff;background:#6cf;padding:5px 0;border: 1px solid #6cf;";
        var consoleB = "color:#6cf;background:none;padding:5px 0;border: 1px solid #6cf;";
        console.log(`\n %c ${username} %c ${usertext}`, consoleA, consoleB);
        console.log(`\n %c ${username} %c ${userurl}`, consoleA, consoleB);
        title();
    })
})();

function title() {
    var cbTitle = `┭┮﹏┭┮  被发现啦!`;
    var lTitle = `(*^▽^*)  藏好啦!`;

    var comeBackTime = 3000;
    var webTitle = $("title").html();
    $(document).on('visibilitychange', (e) => {
        if (e.target.visibilityState === "visible") {
            $("title").html(cbTitle);
        } else {
            $("title").html(lTitle);
            titleTime = setTimeout(function () {
                document.title = webTitle;
            }, comeBackTime);
        }
    });
}
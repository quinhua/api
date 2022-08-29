// 引入之前先添加网易云歌单id
//  var qh_wy_id="";    //7586120986

function loadCss(url, callback) {
    var link = document.createElement('link');
    var fn = callback || function () { };
    link.setAttribute('type', 'text/css');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', url);
    document.head.appendChild(link);
}

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
    loadCss("https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css");
    loadJS("https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js");
    loadJS("https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js");
    loadJS("https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js", () => {
        var username = '钱辉';
        var usertext = "一支穿云箭，千军万马来相见！";
        var consoleA = "color:#fff;background:#6cf;padding:5px 0;border: 1px solid #6cf;";
        var consoleB = "color:#6cf;background:none;padding:5px 0;border: 1px solid #6cf;";
        console.log(`\n %c ${username} %c ${usertext}`, consoleA, consoleB);
        qhmusic();
    })
})();

function qhmusic() {
   // var qh_wy_id="";

    $("body").append(`
        <meting-js
            id=${qh_wy_id}
            lrc-type="0"
            server="netease"
            order="list"
            type="playlist"
            fixed="true"
            list-olded="true"
            autoplay="true"
            mutex="true"
        ></meting-js>
    `)
}
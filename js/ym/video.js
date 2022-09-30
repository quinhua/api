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
    loadCss("https://vjs.zencdn.net/7.20.2/video-js.css");
    loadJS("https://vjs.zencdn.net/7.20.2/video.min.js");
    loadJS("https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js", () => {
        var username = '钱辉'; var usertext = "一支穿云箭，千军万马来相见！";
        var userurl = "https://github.com/quinhua";
        var consoleA = "color:#fff;background:#6cf;padding:5px 0;border: 1px solid #6cf;";
        var consoleB = "color:#6cf;background:none;padding:5px 0;border: 1px solid #6cf;";
        console.log(`\n %c ${username} %c ${usertext}`, consoleA, consoleB);
        console.log(`\n %c ${username} %c ${userurl}`, consoleA, consoleB);
        qhvideo();
    })
})();

function qhvideo() {
    // var qh_v_w="400px";
    // var qh_v_h="210px";
    // var qh_v_b_r="10px";
    // var qh_video="https://video.699pic.com/videos/93/62/02/b_Uc9dpeHc9DhE1592936202.mp4";

    $("body").css({ "margin": "0", "padding": "0" }).append(`
        <div id="qh_video">
            <div id="qh_video_box">
                <video id='qh-video' class="video-js vjs-default-skin Fn vjs-big-play-centered" controls>
                    <source src=${qh_video} type="video/mp4">
                </video>
            </div>
        </div>
    `);
    $("#qh_video").css({ "width": `${qh_v_w}`, "height": `${qh_v_h}`, "border-radius": `${qh_v_b_r}`, "overflow": "hidden" });
    $("#qh_video_box").css({ "width": `${qh_v_w}`, "height": `${qh_v_h}` });
    $(".video-js").css({ "width": `${qh_v_w}`, "height": `${qh_v_h}` });
}
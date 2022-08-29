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
        wangge();
    })
})();
function wangge() {
    var gzwh = 40;//格子大小
    var gzcolor = "#6cf";//格子颜色
    
    $("body").css({ "margin": "0", "padding": "0" }).append($('<canvas id="myCanvas"></canvas>'))
    $("#myCanvas").css({ "width": "100vw", "height": "100vh", "position": "fixed", "top": "0", "left": "0", "z-index": "-100" });
    window.addEventListener('load', eventWindowLoaded, false);
    function eventWindowLoaded() {
        canvasApp();
    }
    function canvasSupport(e) {
        return !!e.getContext;
    }
    function canvasApp() {
        var myCanvas = document.getElementById('myCanvas');
        if (!canvasSupport(myCanvas)) {
            return;
        }
        var ctx = myCanvas.getContext('2d');
        myCanvas.width = window.innerWidth;
        myCanvas.height = window.innerHeight;
        function drawScreen() {
            var dx = gzwh;
            var dy = gzwh;
            var x = 0;
            var y = 0;
            var w = myCanvas.width;
            var h = myCanvas.height;
            var xy = 10;
            ctx.lineWidth = 1;
            while (y < h) {
                y = y + dy;
                ctx.moveTo(x, y);
                ctx.lineTo(w, y);
                ctx.stroke();
                ctx.font = "1px Calibri";
                ctx.strokeStyle = gzcolor;
                ctx.fillText(xy, x, y);
                xy += 10;
            }
            y = 0;
            xy = 10;
            while (x < w) {
                x = x + dx;
                ctx.moveTo(x, y);
                ctx.lineTo(x, h);
                ctx.stroke();
                ctx.font = "1px Calibri";
                ctx.fillText(xy, x, 10);
                xy += 10;
            }
        }
        drawScreen();
    }
};
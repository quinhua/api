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
        jianbian3();
    });
})();
function jianbian3() {
    $("body").css({ "margin": "0", "padding": "0"}).append($('<canvas id="canvasJb3" width="32" height="32">'));
    $("#canvasJb3").css({ "width": "100vw", "height": "100vh", "position": "fixed", "top": "0", "left": "0", "right": "0", "bottom": "0", "z-index": "-100" });
    var c = document.getElementById('canvasJb3');
    var cvjb3 = c.getContext('2d');
    var col = function (x, y, r, g, b) {
        cvjb3.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        cvjb3.fillRect(x, y, 1, 1);
    }
    var R = function (x, y, t) {
        return (Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t)));
    }

    var G = function (x, y, t) {
        return (Math.floor(192 + 64 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)));
    }

    var B = function (x, y, t) {
        return (Math.floor(192 + 64 * Math.sin(5 * Math.sin(t / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100)));
    }

    var t = 0;

    var run = function () {
        for (x = 0; x <= 35; x++) {
            for (y = 0; y <= 35; y++) {
                col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
            }
        }
        t = t + 0.120;
        window.requestAnimationFrame(run);
    }

    run();






}
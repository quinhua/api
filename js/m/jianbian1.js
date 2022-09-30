//granim.js的Github地址:    https://github.com/sarcadass/granim.js

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
    loadJS("https://cdn.jsdelivr.net/gh/sarcadass/granim.js@2.0.0/dist/granim.js");
    loadJS("https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js", () => {
        var username = '钱辉'; var usertext = "一支穿云箭，千军万马来相见！";
        var userurl = "https://github.com/quinhua";
        var consoleA = "color:#fff;background:#6cf;padding:5px 0;border: 1px solid #6cf;";
        var consoleB = "color:#6cf;background:none;padding:5px 0;border: 1px solid #6cf;";
        console.log(`\n %c ${username} %c ${usertext}`, consoleA, consoleB);
        console.log(`\n %c ${username} %c ${userurl}`, consoleA, consoleB);
        jianbian1();
    });
})();

const jianbian1 = () => {
    $("body").css({ "margin": "0", "padding": "0"}).append($("<canvas id='canvasGranim'></canvas>"));
    $("#canvasGranim").css({ "width": "100vw", "height": "100vh", "position": "fixed", "top": "0", "left": "0", "right": "0", "bottom": "0", "z-index": "-100" });
    var granimInstance = new Granim({
        element: '#canvasGranim',
        direction: 'left-right',
        isPausedWhenNotInView: true,
        states: {
            "default-state": {
                gradients: [
                    ['#a18cd1', '#fbc2eb'],
                    ['#fff1eb', '#ace0f9'],
                    ['#d4fc79', '#96e6a1'],
                    ['#a1c4fd', '#c2e9fb'],
                    ['#a8edea', '#fed6e3'],
                    ['#9890e3', '#b1f4cf'],
                    ['#a1c4fd', '#c2e9fb'],
                    ['#DA70D6', '#ace0f9']
                ]
            }
        }
    });
}
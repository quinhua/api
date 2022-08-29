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
const jianbian3=()=>{
    const colors = [
        ['#a18cd1', '#fbc2eb'],
        ['#fff1eb', '#ace0f9'],
        ['#d4fc79', '#96e6a1'],
        ['#a1c4fd', '#c2e9fb'],
        ['#a8edea', '#fed6e3'],
        ['#9890e3', '#b1f4cf'],
        ['#a1c4fd', '#c2e9fb'],
        ['#DA70D6', '#ace0f9']
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    if(!$("body").height()){
        $("body").css({"height":"100vh"})
    }
    $("body").css({ "margin": "0", "padding": "0","background":`radial-gradient(ellipse at center, ${color[0]} 0%, ${color[1]} 100%)` })
}

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
        jianbian2();
    });
})();
const jianbian2 = () => {
    var jianbian2svg = `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" style="position: fixed;top: 0;left:0;width: 100%;height: 100%;z-index: -99;">
<defs>
    <radialGradient id="Gradient1" cx="50%" cy="50%" fx="10%" fy="50%" r=".5">
        <animate attributeName="fx" dur="34s" values="0%;3%;0%" repeatCount="indefinite" />
        <stop offset="0%" stop-color="#ff0" />
        <stop offset="100%" stop-color="#ff00" />
    </radialGradient>
    <radialGradient id="Gradient2" cx="50%" cy="50%" fx="10%" fy="50%" r=".5">
        <animate attributeName="fx" dur="23.5s" values="0%;3%;0%" repeatCount="indefinite" />
        <stop offset="0%" stop-color="#0ff" />
        <stop offset="100%" stop-color="#0ff0" />
    </radialGradient>
    <radialGradient id="Gradient3" cx="50%" cy="50%" fx="50%" fy="50%" r=".5">
        <animate attributeName="fx" dur="21.5s" values="0%;3%;0%" repeatCount="indefinite" />
        <stop offset="0%" stop-color="#f0f" />
        <stop offset="100%" stop-color="#f0f0" />
    </radialGradient>
</defs>
<rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient1)">
    <animate attributeName="x" dur="20s" values="25%;0%;25%" repeatCount="indefinite" />
    <animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite" />
    <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="17s"
        repeatCount="indefinite" />
</rect>
<rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient2)">
    <animate attributeName="x" dur="23s" values="-25%;0%;-25%" repeatCount="indefinite" />
    <animate attributeName="y" dur="24s" values="0%;50%;0%" repeatCount="indefinite" />
    <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="18s"
        repeatCount="indefinite" />
</rect>
<rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient3)">
    <animate attributeName="x" dur="25s" values="0%;25%;0%" repeatCount="indefinite" />
    <animate attributeName="y" dur="26s" values="0%;25%;0%" repeatCount="indefinite" />
    <animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="19s"
        repeatCount="indefinite" />
</rect>
</svg>`;
    $("body").css({ "margin": "0", "padding": "0" }).append(jianbian2svg);
}

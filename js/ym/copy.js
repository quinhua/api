//被复制元素==》    id="名称"
//按钮元素设置==》 id="copyBtn" data-clipboard-target="#名称"

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
    loadJS("https://unpkg.com/sweetalert/dist/sweetalert.min.js");
    loadJS("https://cdn.jsdelivr.net/npm/clipboard@2.0.10/dist/clipboard.min.js", () => {
        var username = '钱辉';
        var usertext = "一支穿云箭，千军万马来相见！";
        var consoleA = "color:#fff;background:#6cf;padding:5px 0;border: 1px solid #6cf;";
        var consoleB = "color:#6cf;background:none;padding:5px 0;border: 1px solid #6cf;";
        console.log(`\n %c ${username} %c ${usertext}`, consoleA, consoleB);
        copy();
    })
})();
function copy() {
    var clipboard = new ClipboardJS('#copyBtn');
    clipboard.on('success', function (e) {
        // console.info('Action:', e.action);
        // console.info('Text:', e.text);
        // console.info('Trigger:', e.trigger);
        swal({  
            text: "已复制到剪切板!",
            icon: "success",
            button: "确定"
        });
        e.clearSelection();
    });
}
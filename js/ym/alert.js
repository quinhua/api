// swal({   //基础功能
//     title: "标题!",//(可省)
//     text: "不忘初心，方得始终!",
//     icon: "success",//(可省) warning、error、success、info
//     button: "确定"//(可省)
// });

// swal("不忘初心，方得始终!", {//取消和确认、事件回调
//     buttons: ["取消", "确定"],
// })
//     .then((value) => {
//         swal(`The returned value is: ${value}`);
//     });

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
    loadJS("https://unpkg.com/sweetalert/dist/sweetalert.min.js", () => {
        var username = '钱辉';
        var usertext = "一支穿云箭，千军万马来相见！";
        var consoleA = "color:#fff;background:#6cf;padding:5px 0;border: 1px solid #6cf;";
        var consoleB = "color:#6cf;background:none;padding:5px 0;border: 1px solid #6cf;";
        console.log(`\n %c ${username} %c ${usertext}`, consoleA, consoleB);
    })
})();
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
        juzi();
    })
})();

function juzi(){
    $("html,body").click(function(e){   
        var dfs=[   
            "不忘初心，方得始终",
            "永远相信美好的事情，即将发生",
            "此后人间应如是，天南海北不相逢",
            "頑張ってね",
            "难过从来就不能解决任何问题",
            "要保持希望在每天清晨太阳升起",
            "明日の方がいい",
            "There will be you in the future",
            "最是人间留不住，朱颜辞镜花辞树"
        ];  
        var n=Math.floor(Math.random() * dfs.length + 1)-1;  
        var $i=$("<p/>").text(dfs[n]);      
        var x=e.pageX,y=e.pageY;       
        $i.css({                      
            "z-index":999,   
            "top":y-20,   
            "left":x,   
            "position":"absolute",   
            "color":`#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`, 
            "font-family":"微软雅黑",  
            "cursor":"default",  
            "-moz-user-select": "none",  
            "-webkit-user-select": "none",  
            "-ms-user-select": "none",  
            "-khtml-user-select": "none",  
            "user-select": "none",  
        });   
        $("body").append($i);     
        $i.animate( {"top":y-180,"opacity":0}, 1500, function(){$i.remove();});    
        e.stopPropagation();  
    });  
}
//需添加pre标签，并赋予名为pre的id值，内容随便，可换行，原样输出。
{/* <pre id="pre">
*********************
我
钱辉
打钱
*********************
</pre> */}

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

loadJS('https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js', () => {
    dazi();
    var username = '钱辉';
    var usertext = "一支穿云箭，千军万马来相见！";
    var consoleA = "color:#fff;background:#6cf;padding:5px 0;border: 1px solid #6cf;";
    var consoleB = "color:#6cf;background:none;padding:5px 0;border: 1px solid #6cf;";
    console.log(`\n %c ${username} %c ${usertext}`, consoleA, consoleB);
    
})
   function dazi(){
    $("body").css({ "margin": "0", "padding": "0", "width": "100vw", "height": "100vh", "overflow": "hidden", "background-color": "#000000","color":"#ffffff"})
    $("#pre").css({"display":"none"});
    djtext = pre.innerHTML
    openComment = false;
    writestc = function (which) {
        if (which === '/' && openComment === false) {
            openComment = true;
            djtext = $('#style-text').html() + which;
        } else if (which === '/' && openComment === true) {
            openComment = false;
            djtext = $('#style-text').html().replace(/(\/[^\/]*\*)$/, '<em class="comment">$1/</em>');
        } else if (which === ':') {
            djtext = $('#style-text').html().replace(/([a-zA-Z- ^\n]*)$/, '<em class="key">$1</em>:');
        } else if (which === ';') {
            djtext = $('#style-text').html().replace(/([^:]*)$/, '<em class="value">$1</em>;');
        } else if (which === '{') {
            djtext = $('#style-text').html().replace(/(.*)$/, '<em class="selector">$1</em>{');
        } else {
            djtext = $('#style-text').html() + which;
        }
        $('#style-text').html(djtext);
        return $('#style-tag').append(which);
    };
    writest = function (message, index, interval) {
        var pre;
        if (index < message.length) {
            pre = document.getElementById('style-text');
            pre.scrollTop = pre.scrollHeight;
            writestc(message[index++]);
            return setTimeout((function () {
                return writest(message, index, interval);
            }), interval);
        }
    };
    $('body').append(`  <style id="style-tag"></style>
<span id="echo"></span>
<span id="heart"><i></i></span>
<pre id="style-text"></pre>`);
    time = window.innerWidth <= 578 ? 4 : 16;
    writest(djtext, 0, time);

   }
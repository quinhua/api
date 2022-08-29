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
          progress();
    })
  })();
  function progress() {
    const pHeight="8px";
    const pColor="#7983ff";

    $("body").css({"margin": "0", "padding": "0"}).append($(`<div id="scroll-progress"></div>`))
    $("#scroll-progress").css({"position":"fixed","top":"0","width":"0%","height":`${pHeight}`,"background":`${pColor}`})
    const height =    $(document.body).outerHeight(true) - $(window).height();
    $(window).scroll(()=>{
        const scrollTop =$(document).scrollTop();
        $('#scroll-progress').css({"width":`${(scrollTop / height) * 100}%`});
    });
  }
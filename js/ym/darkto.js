//按钮元素设置    <div class="darkto"></div>
/* <style>
.dark {
 background-color:var(--bg_color);
 color: var(--font_color);
}
</style> */

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
    if (dark.getFlag('dark') != null) {
      dark.firstDark();
    } else {
      dark.removeFlag();
      $("#darkto").text("深色");
    }
    darkFrom();
  })
})();
function darkFrom() {
  $("body").css({ "--bg_color": "rgb(33, 33, 33)", "--font_color": "rgb(255, 255, 255)" })
  $(".darkto").css({
    "width": "40px", "height": "25px", "background": "rgba(204,204,204,0.4)", "display": "flex",
    "justify-content": "center", "align-items": "center"
  }).css({ "cursor": "pointer" }).on("click", function () {
    dark.clickDark();
  })
}
const dark = {
  darkText: function () { $(".darkto").text("深色"); },
  lightText: function () { $(".darkto").text("浅色"); },
  setFlag: function () {
    localStorage.setItem("dark", "yes");
  },
  removeFlag: function () {
    localStorage.setItem("dark", "no");
  },
  getFlag: function (key) {
    return localStorage.getItem(key);
  },
  setDark: function () {
    $("body").addClass("dark");
  },
  removeDark: function () {
    $("body").removeClass("dark");
  },
  firstDark: function () {
    if (this.getFlag("dark") == "yes") {
      this.lightText();
      this.setFlag();
      this.setDark();
    } else {
      this.darkText();
      this.removeFlag();
      this.removeDark();
    }
  },
  clickDark: function () {
    if (this.getFlag("dark") == "no") {
      this.lightText();
      this.setFlag();
      this.setDark();
    } else {
      this.darkText();
      this.removeFlag();
      this.removeDark();
    }
  },
};
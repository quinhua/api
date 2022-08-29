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
		heikedg();
	})
})();

const heikedg = () => {
	$("body").css({ "margin": "0", "padding": "0", "width": "100vw", "height": "100vh", "overflow": "hidden" }).append($("<canvas id='canvashkdg'></canvas>"))
	$("#canvashkdg").css({ "width": "100vw", "height": "100vh", "position": "fixed", "top": "0", "left": "0","z-index":"-100" });

	var can = canvashkdg.getContext("2d");
	var s = window.screen;
	var w = canvashkdg.width = s.width;
	var h = canvashkdg.height = s.height;
	can.fillStyle = color2();
	var words = Array(256).join("1").split("");
	setInterval(draw, 50);
	function draw() {
		can.fillStyle = 'rgba(0,0,0,0.05)';
		can.fillRect(0, 0, w, h);
		can.fillStyle = color2();
		words.map(function (y, n) {
			text = String.fromCharCode(Math.ceil(65 + Math.random() * 57));
			x = n * 10;
			can.fillText(text, x, y)
			words[n] = (y > 758 + Math.random() * 484 ? 0 : y + 10);
		});
	}
	function color1() {
		var colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
		var color = "";
		for (var i = 0; i < 6; i++) {
			var n = Math.ceil(Math.random() * 15);
			color += "" + colors[n];
		}
		return '#' + color;
	}
	function color2() {
		var color = Math.ceil(Math.random() * 16777215).toString(16);
		while (color.length < 6) {
			color = '0' + color;
		}
		return '#' + color;
	}
	function color3() {
		return "#" + (function (color) {
			return new Array(7 - color.length).join("0") + color;
		})((Math.random() * 0x1000000 << 0).toString(16))
	}
}
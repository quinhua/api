const svgcvline2 = `
<div class="svg_gb_line">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 600 600">
        <g class="speedLines">
            <line x1="0" y1="0" x2="0" y2="0" />
            <line x1="0" y1="0" x2="0" y2="0" />
            <line x1="0" y1="0" x2="0" y2="0" />
            <line x1="0" y1="0" x2="0" y2="0" />
            <line x1="0" y1="0" x2="0" y2="0" />
            <line x1="0" y1="0" x2="0" y2="0" />
            <line x1="0" y1="0" x2="0" y2="0" />
            <line x1="0" y1="0" x2="0" y2="0" />
            <line x1="0" y1="0" x2="0" y2="0" />
            <line x1="0" y1="0" x2="0" y2="0" />
            <line x1="0" y1="0" x2="0" y2="0" />
        </g>
    </svg>
</div>
`;
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
    loadJS("https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js")
    loadJS("https://unpkg.co/gsap@3/dist/gsap.min.js", () => {
        var username = '钱辉';
        var usertext = "一支穿云箭，千军万马来相见！";
        var consoleA = "color:#fff;background:#6cf;padding:5px 0;border: 1px solid #6cf;";
        var consoleB = "color:#6cf;background:none;padding:5px 0;border: 1px solid #6cf;";
        console.log(`\n %c ${username} %c ${usertext}`, consoleA, consoleB);
        svgline2();
    })
})();
function svgline2() {
    $("body").css({ "margin": "0", "padding": "0" }).append(`${svgcvline2}`);
    $(".svg_gb_line").css({ "width": "100vw", "height": "100vh", "position": "fixed", "top": "0", "left": "0", "right": "0", "bottom": "0", "z-index": "-100", "overflow": "hidden" });
    $(".svg_gb_line g line").css({"stroke-width": "2px"})
    let colorArray = [
        "pink",
        "yellow",
        "dodgerblue",
        "green",
        "red",
        "orange",
        "violet"
    ]

    let mm = gsap.matchMedia();

    mm.add("(orientation: portrait) and (prefers-reduced-motion: no-preference)", (context) => {
        gsap.fromTo(".speedLines line", {
            attr: {
                y1: 0,
                y2: "random(20, 200)"
            },
            x: "random(0, 600)",
            y: -200,
            stroke: gsap.utils.wrap(colorArray)
        }, {
            duration: "random(0.2, 0.6)",
            y: 600,
            ease: "none",
            stagger: {
                each: 0.2,
                repeat: -1,
                repeatRefresh: true
            }
        }).seek(100)
    });

    mm.add("(orientation: landscape) and (prefers-reduced-motion: no-preference)", (context) => {
        gsap.fromTo(".speedLines line", {
            attr: {
                x1: 0,
                x2: "random(20, 200)"
            },
            y: "random(0, 600)",
            x: -200,
            stroke: gsap.utils.wrap(colorArray)
        }, {
            duration: "random(0.2, 0.6)",
            x: 600,
            ease: "none",
            stagger: {
                each: 0.2,
                repeat: -1,
                repeatRefresh: true
            }
        }).seek(100)
    });
}
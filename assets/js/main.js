function loadIcon(href) {
    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/x-icon";
    link.href = href;
    document.head.appendChild(link);
}

function loadCSS(href) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
}
  
function loadJS(src, callback) {
    const script = document.createElement("script");
    script.src = src;
    script.onload = callback;
    document.body.appendChild(script);
}

function loadFont(href) {
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = href;
    document.head.appendChild(link);
}

loadIcon("/assets/img/faviconMain.png");
loadCSS("/node_modules/bootstrap/dist/css/bootstrap.min.css");
loadCSS("/node_modules/bootstrap-icons/font/bootstrap-icons.css");
loadCSS("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap")
loadCSS("/assets/css/brand.css");
loadFont("https://fonts.googleapis.com");
loadFont("https://fonts.gstatic.com");
  
loadJS("/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js", () => {
    console.info("Bootstrap JS loaded");
});

loadJS("/node_modules/jquery/dist/jquery.js", () => {
    console.info("jQuery loaded");
});
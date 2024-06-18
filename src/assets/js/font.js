function loadFont(href) {
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = href;
    document.head.appendChild(link);
}

function loadCSS(href) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
}

loadFont("https://fonts.googleapis.com");
loadFont("https://fonts.gstatic.com");
loadCSS("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap");
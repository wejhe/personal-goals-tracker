function loadIcon(href) {
    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/x-icon";
    link.href = href;
    document.head.appendChild(link);
}

loadIcon("./assets/img/faviconMain.png");
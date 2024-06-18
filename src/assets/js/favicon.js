import faviconMain from '/src/assets/img/faviconMain.png';

function loadIcon(href) {
    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/x-icon";
    link.href = href;
    document.head.appendChild(link);
}

loadIcon(faviconMain);
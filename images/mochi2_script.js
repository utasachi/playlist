document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("details.menu").forEach(menu => {    // いったん全部閉じる
        menu.removeAttribute("open");});
    const params = new URLSearchParams(location.search);    // ?menu=main の時だけ開く
    if (params.get("menu") === "main") {
        const menu = document.querySelector(
            'details.menu[data-menu="main"]');
        if (menu) {
            menu.setAttribute("open", "");}}});

document.addEventListener("pointerdown", e => {
    document.querySelectorAll("details.menu[open]").forEach(menu => {
        if (!menu.contains(e.target)) {
            menu.removeAttribute("open");}});});

function toggleArea() {
    const el = document.getElementById("fileArea");
    if (el.style.display === "none") {
        el.style.display = "block";
    } else {
        el.style.display = "none";
    }
}
if (location.href.startsWith("file:///")) {
    const drive =
        decodeURIComponent(location.pathname).match(/^\/([A-Za-z]:)/)[1];
    document.querySelectorAll("a.mvlink").forEach(a => {
    const path =
        (drive + "/karaoke"
        + decodeURIComponent(a.getAttribute("href")))
        .replace(/\//g, "\\");
        a.href =
            "http://localhost:13579/browser.html?path="
            + encodeURI(path);
        a.target = "mpc";
    });
    document.querySelectorAll('a[href="/"]').forEach(a => {
        a.href = "index.html";
    });
}

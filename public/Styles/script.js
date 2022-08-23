"use strict";
window.onscroll = function () {
    var dScroll = document.documentElement.scrollTop;
    let navbar = document.querySelectorAll(".navbar");
    if (dScroll >= 500) {
        for (const nav of navbar) {
            nav.classList.add("navbar-top-fade");
            console.log("hola2");
        }
    }
    else {
        for (const nav of navbar) {
            nav.classList.remove("navbar-top-fade");
        }
    }
};
window.addEventListener("load", function () {
    var allimages2 = document.querySelectorAll("img");
    for (const image of allimages2) {
        var atribute = image.getAttribute("data-src");
        if (atribute != null) {
            image.setAttribute("src", atribute);
        }
    }
});

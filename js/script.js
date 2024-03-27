"use strict"
let $ = document;

let preloader = $.querySelector("#preloader-container");
window.onload = function(){
    preloader.style.display = "none";
}

let title = $.querySelector("title");
window.addEventListener("blur", function () {
    title.innerHTML = "نرو مریم...";
})
window.addEventListener("focus", function () {
    title.innerHTML = "خوش برگشتی...";
    this.setTimeout(function () {
        title.innerHTML = "My resume";
    }, 2000)
})

let social = $.querySelector(".social");
let networks = $.querySelectorAll(".sni");
let information = $.querySelector(".information");
$.body.dataset.title
networks.forEach(function (network) {
    network.addEventListener("mouseover", function (event) {
        information.style.display = "grid";
        social.style.borderBottom = "5px dotted gray";
        $.querySelector("#title").innerHTML = event.target.dataset.title;
        $.querySelector("#content").innerHTML = event.target.dataset.content;
    })
})

let arrow = $.querySelector(".arrow");
let nav = $.querySelector("nav");
this.addEventListener("scroll", function () {
    if (this.scrollY > ($.documentElement.scrollHeight * 0.075)) {
        arrow.style.display = "flex";
    } else {
        arrow.style.display = "none";
    }
})
arrow.addEventListener("click", function () {
    $.documentElement.scrollTo(0, 0);
})
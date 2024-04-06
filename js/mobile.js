let $ = document;

$.querySelector("#hamberger").addEventListener("click", () => {
    $.querySelector("#menu").style.display = "flex";
    $.querySelector("#hamberger").style.display = "none";
})
window.addEventListener("click", () => {
    $.querySelector("#menu").style.display = "none";
    $.querySelector("#hamberger").style.display = "block";
})

let social = $.querySelector(".social");
let networks = $.querySelectorAll(".sni");
let information = $.querySelector(".information");
$.body.dataset.title
networks.forEach(function (network) {
    network.addEventListener("touchmove", function (event) {
    information.style.display = "grid";
    social.style.borderBottom = "5px dotted gray";
    $.querySelector("#title").innerHTML = event.target.dataset.title;
    $.querySelector("#content").innerHTML = event.target.dataset.content;
})
})
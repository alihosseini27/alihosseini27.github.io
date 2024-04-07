document.querySelector("#hamberger").addEventListener("click", () => {
    document.querySelector("#menu").style.display = "flex";
    setTimeout(() => {
        document.querySelector("#menu").style.display = "none";
    }, 3000)
});

networks.forEach(function (network) {
    network.addEventListener("touchmove", function (event) {
        information.style.display = "grid";
        social.style.borderBottom = "5px dotted gray";
        $.querySelector("#title").innerHTML = event.target.dataset.title;
        $.querySelector("#content").innerHTML = event.target.dataset.content;
    })
})

if (window.innerWidth >= 768) {
    window.oncontextmenu = event => {
        event.preventDefault()
    }
}
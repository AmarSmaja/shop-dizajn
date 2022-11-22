const header = document.querySelector("header")
const logo = document.getElementById("logo")
const leftHeader = document.getElementById("left-header")
const rightHeader = document.getElementById("right-header")

window.addEventListener("scroll", function() {
    header.classList.toggle("stickyheader", window.scrollY > 100)
    logo.classList.toggle("removelogo", window.scrollY > 100)
    leftHeader.classList.toggle("removeLeft", window.scrollY > 100)
    rightHeader.classList.toggle("centerHeader", window.scrollY > 100)
})
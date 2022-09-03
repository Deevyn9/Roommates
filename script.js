const navContainer = document.querySelector(".burger-container")
const linksContainer = document.querySelector(".links-container")
const navLinks = document.querySelector(".nav-links")

function openNav() {
    navContainer.classList.toggle('open')
    linksContainer.classList.toggle('fill')
    navLinks.classList.toggle('active')
}
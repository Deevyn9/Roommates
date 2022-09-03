const navContainer = document.querySelector(".burger-container")
const linksContainer = document.querySelector(".links-container")

function openNav() {
    navContainer.classList.toggle('open')
    linksContainer.classList.toggle('fill')
    document.body.style.overflow = 'hidden'
}
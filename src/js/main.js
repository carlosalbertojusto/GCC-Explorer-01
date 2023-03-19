const buttonMenu = document.querySelector("#buttonMenu")
const lineSeparator = document.querySelector(".line")
const menuMobile = document.querySelector(".openMenu")
const IconButton = document.querySelector("#buttonMenuIcon")

function handleOpenMenu() {
  menuMobile.classList.toggle("hide")
  lineSeparator.classList.toggle("hide")
  if (!menuMobile.classList.contains("hide")) {
    IconButton.setAttribute("src", "../assets/close.svg")
    IconButton.setAttribute(
      "alt",
      "Vetor de imagem que representa o símbolo X para fechar o menu"
    )
  } else {
    IconButton.setAttribute("src", "../assets/menu.svg")
  }
}

function handleFocusMenu() {}

buttonMenu.addEventListener("click", handleOpenMenu)

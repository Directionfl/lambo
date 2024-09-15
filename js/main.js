function toggleText() {
  const moreText = document.getElementById("moreText")
  const dots = document.getElementById("dots")
  const textButton = document.getElementById("textButton")

  if (dots.style.display === "none") {
    dots.style.display = "inline"
    moreText.style.display = "none"
  } else {
    dots.style.display = "none"
    textButton.style.display = "none"
    moreText.style.display = "inline"
  }
}

function toggleText2() {
  const moreText = document.getElementById("moreText2")
  const dots = document.getElementById("dots2")
  const textButton = document.getElementById("textButton2")

  if (dots.style.display === "none") {
    dots.style.display = "inline"
    moreText.style.display = "none"
  } else {
    dots.style.display = "none"
    textButton.style.display = "none"
    moreText.style.display = "inline"
  }
}

const mobileButton = document.querySelector(".mobile-button")
const mobileNavigation = document.querySelector(".mobile-list")

mobileButton.addEventListener('click', () => {
  mobileNavigation.classList.toggle('navigation--open')
})
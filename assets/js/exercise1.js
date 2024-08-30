const img = document.querySelector("img")
let selected = ""

img.addEventListener("click", () => {
  selected = selected ? "" : "selected"
  img.className = selected
})

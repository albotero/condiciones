const selectContainer = document.querySelector(".select-container")
const info = document.querySelector(".info")
const passwordButton = document.getElementById("password-button")

const options = "123456789".split("")

const selects = "123".split("").map((i) => {
  const el = document.createElement("select")
  el.id = `select${i}`
  el.className = "pass-select"

  options.forEach((o) => {
    const opt = document.createElement("option")
    opt.text = o
    opt.value = o
    el.appendChild(opt)
  })

  selectContainer.appendChild(el)
  return el
})

const checkPassword = () => {
  const pass = selects.reduce((acc, el) => acc + el.value, "")
  switch (pass) {
    case "911":
      info.innerText = "Password 1 correcto"
      break
    case "714":
      info.innerText = "Password 2 correcto"
      break
    default:
      info.innerText = "Password incorrecto"
  }
}

passwordButton.addEventListener("click", checkPassword)

const stickers = {
  1: { selected: 0, desc: "Animales", img: "vaca.png" },
  2: { selected: 0, desc: "Comidas", img: "pastel.png" },
  3: { selected: 0, desc: "Navidad", img: "papa-noel.png" },
}

const stickersContainer = document.querySelector(".stickers-container")
const qtyInfo = document.querySelector(".info")

const checkStickers = () => {
  const totalStickers = Object.entries(stickers).reduce((acc, el) => el[1].selected + acc, 0)
  qtyInfo.innerText = `Llevas ${totalStickers <= 10 ? totalStickers : "demasiados"} sticker${
    totalStickers === 1 ? "" : "s"
  }`
}

const inputChange = (e) => {
  const inputId = e.target.id.replace("stickers-input-", "")
  stickers[inputId].selected = Number(e.target.value)
  checkStickers()
}

Object.entries(stickers).forEach(([id, { img }]) => {
  const stickersImg = document.createElement("img")
  stickersImg.className = "stickers-img"
  stickersImg.src = `./assets/img/${img}`
  stickersImg.style.gridArea = `sticker${id}`
  stickersContainer.appendChild(stickersImg)

  const stickersInput = document.createElement("input")
  stickersInput.className = "stickers-input"
  stickersInput.id = `stickers-input-${id}`
  stickersInput.type = "number"
  stickersInput.min = 0
  stickersInput.value = 0
  stickersInput.style.gridArea = `input${id}`
  stickersInput.addEventListener("change", inputChange)
  stickersContainer.appendChild(stickersInput)
})

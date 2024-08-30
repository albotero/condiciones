const frame = document.querySelector(".frame")

frame.contentDocument.write(`
  <p style="max-width: 50%; text-align: center; font-size: 1.5rem; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);">
  Haz clic en un ejercicio para verlo
  </p>
  `)

for (let i = 1; i <= 3; i++) {
  const id = `exercise${i}`
  document.getElementById(id).addEventListener("click", () => {
    frame.src = `${id}.html`
  })
}

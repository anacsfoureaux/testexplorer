const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Hoje já foi hein!")
    return
  }

  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup", JSON.stringify(nlwSetup.data))
  console.log(nlwSetup.data)
}

const data = JSON.parse(localStorage.getItem("NLWSetup")) || {}
nlwSetup.setData(data)
nlwSetup.load()

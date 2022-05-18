const Container = document.querySelector(".container")
const producto = document.querySelector("#productoId")
const ArrozChino = document.querySelector("#arrozChino")
const inputPrecio = document.querySelector("#inputPrecio")

const nose = () => {
    console.log("pise")

}

document.addEventListener("click", (e) => {
    if (e.target.dataset.producto === "arrozChino") {
        nose()
    }
})
function listarItems() {
    const contenedor = document.getElementById("contenedor")
    contenedor.innerHTML = ""

    let listaItems = JSON.parse(localStorage.getItem("lista")) || []

    listaItems.forEach((item, index) => {
        const li = document.createElement("li")
        li.classList.add("list-group-item")
        li.textContent = item
        contenedor.appendChild(li)
    });
}

function agregarItem() {
    const input = document.getElementById("item")
    const item = input.value.trim()

    if (item !== "") {
        let listaItems = JSON.parse(localStorage.getItem("lista")) || []
        listaItems.push(item)
        localStorage.setItem("lista", JSON.stringify(listaItems))
        listarItems()
        input.value = ""
    } else {
        alert("El campo esta vacio, por favor ingresa un texto.")
    }
}

function limpiarLista() {
    localStorage.removeItem("lista")
    listarItems()
}

document.getElementById("agregar").addEventListener("click", agregarItem)

document.getElementById("limpiar").addEventListener("click", limpiarLista)

document.addEventListener("DOMContentLoaded", listarItems)
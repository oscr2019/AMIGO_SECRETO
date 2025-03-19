let nombres = [];

function agregarNombre() {
    let input = document.getElementById("nombreInput");
    let mensaje = document.getElementById("mensaje");
    let nombre = input.value.trim().toLowerCase(); // Convertir a minúsculas antes de agregarlo
    
    if (nombre === "") {
        mensaje.textContent = "Por favor, ingresa un nombre válido.";
        mensaje.style.color = "red";
        return;
    }
    if (nombres.includes(nombre)) {
        mensaje.textContent = "No se puede ingresar el mismo nombre. Por favor, ingresa otro.";
        mensaje.style.color = "red";
        return;
    }
    
    mensaje.textContent = "";
    nombres.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaNombres");
    lista.innerHTML = "";
    nombres.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre.charAt(0).toUpperCase() + nombre.slice(1); // Para mostrar el nombre con la primera letra en mayúscula
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (nombres.length === 0) {
        alert("La lista está vacía. Agrega nombres antes de sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * nombres.length);
    document.getElementById("resultado").textContent = "El amigo secreto es: " + nombres[indiceAleatorio].charAt(0).toUpperCase() + nombres[indiceAleatorio].slice(1);
}



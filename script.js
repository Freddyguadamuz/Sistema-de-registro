let nombres = [];

const inputNombre = document.getElementById("nombre");
const botonAdicionar = document.getElementById("adicionar");
const listaNombres = document.getElementById("lista-nombres");
const botonSortear = document.getElementById("sortear");
const botonReiniciar = document.getElementById("reiniciar");
const resultado = document.getElementById("resultado");


botonAdicionar.addEventListener("click", function () {
    const nombre = inputNombre.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    nombres.push(nombre); 
    actualizarLista(); 
    inputNombre.value = ""; 
});


function actualizarLista() {
    listaNombres.innerHTML = ""; 
    nombres.forEach((nombre) => {
        const li = document.createElement("li");
        li.textContent = nombre;
        listaNombres.appendChild(li);
    });
}


botonSortear.addEventListener("click", function () {
    if (nombres.length < 2) {
        alert("Debes agregar al menos 2 nombres para realizar el sorteo.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
    const amigoSecreto = nombres[indiceAleatorio];
    resultado.textContent = `🎉 El amigo secreto es: ${amigoSecreto}`;
});


botonReiniciar.addEventListener("click", function () {
    nombres = []; 
    listaNombres.innerHTML = ""; 
    resultado.textContent = ""; 
});
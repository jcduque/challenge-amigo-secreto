// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo")
    let nombreAmigo = inputAmigo.value
    let validacion = false; // variable para saber si ya existe un nombre
    // validamos si el campo que espera el nombre se encuentra vacio
    if (nombreAmigo === "") {
        alert("Escriba un nombre válido");
        inputAmigo.focus();
        return;
    }
    // Validamos si el nombre ya existe en la lista
    for(let k = 0; k < amigos.length; k++){
            if(amigos[k] == nombreAmigo){
                validacion = true;
                break; // Salimos del bucle si encontramos el nombre
            }
    }
    if (validacion !== false) {
        alert("Escribe un nombre diferente, este ya existe");
        inputAmigo.value = "";
        inputAmigo.focus();
    } else {
        // agregamos el nombre al array amigos
        amigos.push(nombreAmigo);
        // llamamos a la funcion renderizarAmigos
        renderizarAmigos();       
        // Limpiamos el campo de entrada
        inputAmigo.value = "";
        inputAmigo.focus();
    }
}

function renderizarAmigos(){
    // Limpiamos la lista existente antes de agregar los nuevos elementos
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiamos el contenido de la lista
    // usamos el ciclo for sobre el arreglo amigos y agregamos cada nombre como un <li>
    for (let i = 0; i < amigos.length; i++) {
        let lista = document.createElement("li");
        lista.textContent = amigos[i]; // Asignamos el nombre de amigo al <li>
        listaAmigos.appendChild(lista); // Agregamos el <li> al contenedor de la lista
    }
}



function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Necesitas añadir algunos nombres para poder realizar el sorteo");
        return; // Salir de la función si no hay amigos
    }
    // Escoge un amigo aleatorio
    let amigoElegido = amigos[Math.floor(Math.random() * amigos.length)];
    // Mostrar el resultado del sorteo
    const resultadoSorteo = document.querySelector("#resultado");
    resultadoSorteo.textContent = `El amigo sorteado es: ${amigoElegido}`;
    // Limpiar la lista de amigos mostrada en pantalla
    const listaAmigos = document.querySelector("#listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista de amigos
}

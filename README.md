# CHALLENGE AMIGO SECRETO
![Status][statusBagge]
![Version][versionBagge]
![Release][releaseBagge]

## :computer:Tecnologías Utilizadas
- Javascript
- HTML
- CSS
## :clipboard:Bloques de códigos
#### Mostrar en pantalla los amigos que se van añadiendo:
```Javascript
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
```
## :clapper:Funcionamiento del programa
![Challege-amigo-secreto][amigo-secreto-giff]
## :sunglasses:Autor

| [<img src="https://avatars.githubusercontent.com/u/6019480?s=400&u=ff7b5a2ffa87215739382f9d6e144320b7e142f1&v=4" width=115><br><sub>Jean Carlos Duque</sub>](https://github.com/jcduque) | 
| :---: |

<!-- recursos -->
[statusBagge]:https://img.shields.io/badge/STATUS-EN%20PRODUCCION-green
[versionBagge]:https://img.shields.io/badge/VERSION-1.0-blue
[releaseBagge]:https://img.shields.io/badge/RELEASE%20DATE-March-orange
[amigo-secreto-giff]:https://github.com/user-attachments/assets/64298854-bcd4-4d78-bea3-3b86ed333225


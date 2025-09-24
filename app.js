let amigos = [];

function agregarAmigo() {
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor escribe un nombre válido.");
        return;
    }

    amigos.push(nombre); 
    input.value = "";   

    actualizarLista(); 
}

function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; 

    amigos.forEach((amigo, index) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}
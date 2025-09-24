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

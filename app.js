// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo=[];

function  agregarAmigo () {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

    if (!nombreAmigo) {
        alert("Por favor inserta un nombre");
        return;
    }
    amigo.push(nombreAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    renderizarAmigos();
}

    function renderizarAmigos() {
      let listaAmigos = document.getElementById("listaAmigos");
      listaAmigos.innerHTML = "" ;

      for (let i = 0; i < amigo.length; i++) {
           let item = document.createElement("li");
           item.textContent = amigo[i];
           listaAmigos.appendChild(item);

      }
    }

    function sortearAmigo(){
        if(amigo.length === 0) {
          alert("no hay amigos para sortear");
          return;
        }
        let amigosorteado = amigo[Math.floor(Math.random()*amigo.length)];
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `el amigo sorteado es:${amigosorteado}`;

        let limpiarlista = document.getElementById("listaAmigos");
        limpiarlista.innerHTML = "";
        

    }
let parrafoInicial = document.getElementById("p_1");

parrafoInicial.onclick = function(){
    cambiarColor()
}

function cambiarColor(){

    const colores = [
        "red",
        "blue",
        "black",
        "cyan",
        "pink"
    ];

    parrafoInicial.style.color = colores[Math.floor(Math.random() * colores.length)];
}
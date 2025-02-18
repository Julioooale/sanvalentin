function abrirCarta() {
    let carta = document.querySelector(".carta");

    if (carta.classList.contains("abierta")) {
        carta.classList.remove("abierta");
    } else {
        carta.classList.add("abierta");
    }
}

document.addEventListener("click", function() {
    let musica = document.getElementById("musicaFondo");
    if (musica.paused) {
        musica.play();
    }
});

document.getElementById("estrella-btn").addEventListener("click", () => {
    for (let i = 0; i < 30; i++) { // Cantidad de estrellas
        let estrella = document.createElement("div");
        estrella.classList.add("estrella");
        
        // Posición aleatoria
        estrella.style.left = Math.random() * window.innerWidth + "px";
        estrella.style.top = Math.random() * -50 + "px"; // Empieza desde arriba
        
        // Tamaño aleatorio
        let tamaño = Math.random() * 10 + 5;
        estrella.style.width = tamaño + "px";
        estrella.style.height = tamaño + "px";
        
        document.getElementById("contenedor-estrellas").appendChild(estrella);

        // Elimina la estrella después de la animación
        setTimeout(() => { estrella.remove(); }, 2000);
    }
});


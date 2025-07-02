function imagem_aleatoria() {
    let imagem = document.getElementById("imagem");

    if(imagem.src.includes("img/azul.jpg")) {
        imagem.src = "img/roxo.jpg"
    } else {
        imagem.src = "img/azul.jpg"
    }
}
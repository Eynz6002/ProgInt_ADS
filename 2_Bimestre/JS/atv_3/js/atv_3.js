var achou = 0;
var aleatorio;
var texto_pagina = document.getElementById("texto-resultado");
function verificar() {
    let numero_usuario = document.getElementById("entrada").value;
    numero_usuario = parseInt(numero_usuario);
    if (achou == 0) {
        if(numero_usuario == aleatorio) {
            texto_pagina.innerHTML = "Acertou";
            achou = 1;
            main();
        } else {
            texto_pagina.innerHTML = "Errou";
        }
    } else {
        achou = 0;
        verificar();
    }
}
function main() {
    aleatorio = parseInt((Math.random() * 20) + 1);
    console.log(aleatorio);
}
main();
function encontrar_estacao() {
    let texto_pagina = document.getElementById("texto-pagina");

    let mes = prompt("Digite o mês");
    mes = mes.toUpperCase();

    let meses_inverno = ["JANEIRO", "FEVEREIRO", "MARÇO", "MARCO"];
    let meses_primavera = ["ABRIL", "MAIO", "JUNHO"];
    let meses_verao = ["JULHO", "AGOSTO", "SETEMBRO"];
    let meses_outono = ["OUTUBRO", "NOVEMBRO", "DEZEMBRO"];

    if(meses_inverno.includes(mes)) {
        texto_pagina.innerHTML = "A estação do ano é: inverno";
    } else if(meses_primavera.includes(mes)) {
        texto_pagina.innerHTML = "A estação do ano é: primavera";
    } else if(meses_verao.includes(mes)) {
        texto_pagina.innerHTML = "A estação do ano é: verao";
    } else if(meses_outono.includes(mes)) {
        texto_pagina.innerHTML = "A estação do ano é: outono";
    }

}
function main() {
    encontrar_estacao();
}
main();
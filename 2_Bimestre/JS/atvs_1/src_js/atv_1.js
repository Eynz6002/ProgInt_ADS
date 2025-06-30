function encontrar_pares() {
    var numero = Number(prompt("Digite um número positivo"));
    var cont = 0, atual = numero + 1;
    var arr_nums = [];

    if(numero > -1) {
        console.log(`Pares depois de ${numero}: `);
        while (cont < 10) {
            if(atual % 2 == 0){
                //console.log(`[${atual}] -> `);
                cont++;
                arr_nums.push(atual);
            }
            atual++;
        }
        console.log("FIM");
    } else {
        console.log("Você digitou um número negativo.\n");
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `${arr_nums}`;
}

encontrar_pares();
function calcular_radianos() {
    var graus = Number(prompt("Digite um valor em graus"));

    if(graus < 0) {
        alert("Você digitou um valor negativo. Convertendo para positivo.");
        graus *= -1;
    }

    var radianos = 3.1415 * graus / 180;

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `${radianos.toFixed(2)}`;
}
function main() {
    calcular_radianos();
}
main();
function encontrar_data() {
    let data = new Date();
    let dia = data.getDate();
    let mes = data.toLocaleString('pt-BR', {month: 'long'});
    let ano = data.getFullYear();

    let data_escrita = `${dia} de ${mes} do ano de ${ano}`;

    let local = document.getElementById("inserir-data");
    local.innerHTML = data_escrita;
}
function main() {
    encontrar_data();
}
main();
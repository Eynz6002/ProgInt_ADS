function calcular() {
    let preco = document.getElementById("preco").value;
    preco = parseFloat(preco);
    let distancia = document.getElementById("distancia").value;
    distancia = parseFloat(distancia);
    let consumo = document.getElementById("consumo").value;
    consumo = parseFloat(consumo);
    
    let litros = distancia/consumo;
    let custo = preco * litros;
    
    let inserir_texto = document.getElementById("resultado-litros");
    inserir_texto.innerHTML = `🚘Litros Necessários: ${litros.toFixed(2)} L`;
    inserir_texto = document.getElementById("resultado-custo");
    inserir_texto.innerHTML = `💰Custo Estimado: R$ ${custo.toFixed(2)}`;
}
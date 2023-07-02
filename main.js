function exibirDados(event) {
    event.preventDefault();

    var localizacao = document.getElementById("localizacao").value;
    var precondicao = document.getElementById("precondicao").value;
    var passos = document.getElementById("passos").value;
    var resultado = document.getElementById("resultado").value;
    var resultadoesperado = document.getElementById("resultadoesperado").value;
    var consideracoes = document.getElementById("consideracoes").value;
    var versao = document.getElementById("versao").value;
    var banco = document.getElementById("banco").value;

    var dadosExibicao = `
        <strong>*Localização:*</strong> ${localizacao}<br>
        <strong>*Pré-Condição:*</strong> ${itens_lista(precondicao)}<br>
        <strong>*Passos:*</strong> ${itens_lista(passos)}<br>
        <strong>*Resultado:*</strong> ${resultado}<br>
        <strong>*Resultado Esperado:*</strong> ${resultadoesperado}<br>
        <strong>*Considerações:*</strong> ${consideracoes}<br>
        <strong>*Versão:*</strong> ${versao}<br>
        <strong>*Banco:*</strong> ${banco}
      `;

    document.getElementById("dadosExibicao").innerHTML = dadosExibicao;
}
function itens_lista(itens) {
    return itens.split("\n").map(i => `</br># ${i}`).join("");
}

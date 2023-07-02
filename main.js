function exibirDadosSubtarefa(event) {
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
        <strong>*Banco:*</strong> ${banco}<br>
        <strong>*Anexos:*</strong>
      `;

    document.getElementById("dadosExibicao").innerHTML = dadosExibicao;
}

function exibirDadosImplementacao(event) {
    event.preventDefault();

    var sucessoCheckbox = document.getElementById("sucesso");
    var observacaoInput = document.getElementById("observacao");
    var versaoInput = document.getElementById("versao");
    var bancoInput = document.getElementById("banco");
    var linkInput = document.getElementById("link");
    var panelDiv = document.getElementById("panel");

    var sucesso = sucessoCheckbox.checked;
    var observacao = observacaoInput.value;
    var versao = versaoInput.value;
    var banco = bancoInput.value;
    var link = linkInput.value;

    var resultado = sucesso ? 'Teste realizado com <span style="color:green">Sucesso</span>' : 'Teste realizado com <span style="color:red">Erro</span> (x)';

    var dadosExibicao = `
        <p>${resultado}</p>
        <p><strong>*Observação:*</strong><br>${observacao}</p>
        <p><strong>*Versão:*</strong><br>${versao}</p>
        <p><strong>*Banco:*</strong><br>${banco}</p>
        <p><strong>*Links:*</strong><br>${link}</p>
        <p><strong>*Anexos:*</strong></p>
      `;

    document.getElementById("dadosExibicao").innerHTML = dadosExibicao;
}

function itens_lista(itens) {
    return itens.split("\n").map(i => `</br># ${i}`).join("");
}

// Função para alternar entre as abas
function changeTab(tabId) {
    // Obter todos os elementos com a classe "tab-content"
    var tabContents = document.getElementsByClassName("tab-content");

    // Remover a classe "active" de todos os elementos com a classe "tab-content"
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }

    // Adicionar a classe "active" ao elemento da aba atual
    var currentTab = document.getElementById(tabId);
    currentTab.classList.add("active");
}

// Adicionar um ouvinte de eventos aos links de aba
var tabLinks = document.getElementsByClassName("tab-link");
for (var i = 0; i < tabLinks.length; i++) {
    tabLinks[i].addEventListener("click", function(event) {
        event.preventDefault();
        var tabId = this.getAttribute("href").substring(1);
        changeTab(tabId);
    });
}
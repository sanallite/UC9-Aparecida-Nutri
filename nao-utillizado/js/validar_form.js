let botaoCriar = document.querySelector("#criar_tarefa");

botaoCriar.addEventListener("click", (event) => {
    event.preventDefault();

    let formulario = document.querySelector("#tarefas");

    let tarefa = ObterDados(formulario);

    let mensagens = [];

    ValidarDados(tarefa, mensagens);

    if ( mensagens.length > 0 ) {
        ExibirMensagens(mensagens);
        return;
    }

    else {
        LimparMensagens();
    }

    function ObterDados(formulario) {
        var tarefa = {
            responsavel: formulario.responsavel.value,
            nome: formulario.nome.value,
            descricao: formulario.desc.value,
            prazo: formulario.prazo.value,
            prioridade: formulario.prioridade.value,
            conclusao: formulario.concluida.checked
        }

        return tarefa;
    }

    function ValidarDados(tarefa, mensagens) {
        if ( tarefa.responsavel === "" ) {
            mensagens.push("Selecione um responsável para a tarefa.");
        }

        else {
            mensagens.push("O responsável pela tarefa é: "+tarefa.responsavel);
        }

        if ( tarefa.nome === "" ) {
            mensagens.push("Selecione um nome para a tarefa.");
        }

        else {
            mensagens.push("Nova Tarefa: "+tarefa.nome);
        }

        if ( tarefa.descricao === "" ) {
            mensagens.push("Descreva sua tarefa.");
        }

        else {
            mensagens.push("Descrição: "+tarefa.descricao);
        }

        if ( tarefa.prazo === "" ) {
            mensagens.push("Defina um prazo para tarefa.");
        }

        else {
            mensagens.push("Prazo: "+tarefa.prazo);
        }

        mensagens.push("Prioridade: "+tarefa.prioridade);

        if ( tarefa.conclusao ) {
            mensagens.push("Estado da tarefa: Concluída.");
        }

        else {
            mensagens.push("Estado da tarefa: Não concluída.");
        }

        return mensagens;
    }

    function ExibirMensagens(mensagens) {
        let fieldset = document.querySelector("#mensagens");
        fieldset.classList.remove("erros");
        fieldset.innerHTML = "";
        var legenda = document.createElement("legend");
        
        mensagens.forEach(msg => {
            var paragrafo = document.createElement("p");

            paragrafo.textContent = msg;
            legenda.textContent = "Mensagens:";

            fieldset.appendChild(legenda);
            fieldset.appendChild(paragrafo);
        });
    }

    function LimparMensagens() {
        let fieldset = document.querySelector("#mensagens");
        fieldset.classList.add("mensagens");
    }
}
);
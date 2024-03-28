import { pacienteService } from "./service.js";

var tabela1 = document.querySelector("#tabela-pacientes");

tabela1.addEventListener("dblclick",
    function(event) {
        const linhaPaciente = event.target.closest("[data-id]");
        // Pega o elemento pai, no caso o tr pelo mais próximo que tenha o atributo data-id, ou seja a linha que vai ser apagada vai ser a que tem a coluna que foi alvo do clique duplo.
        let id = linhaPaciente.dataset.id;

        event.target.parentNode.classList.add("fadeOut");
        setTimeout( () => {
            event.target.parentNode.remove();
            pacienteService.removerPaciente(id);
        }, 500);
        }
        // Depois do time out de 0.5 segundos o elemento alvo será removido da tabela, e o item do banco que tem o mesmo id que está atribuido ao elemento pai será removido.

        /* var alvoElemento = event.target; // td
        var paiElemento = alvoElemento.parentNode; // tr
        paiElemento.remove(); */
);

tabela1.addEventListener("click", function(event) {
    if ( event.target.classList.contains("excluir_paciente") ) {
        event.preventDefault();

        console.log("Botão excluir clicado.");
        const colunaAcoes = event.target.closest("[data-coluna]");
        const linhaPaciente = colunaAcoes.closest("[data-id]");
        // Pega o elemento pai, no caso o tr pelo mais próximo que tenha o atributo data-id, ou seja a linha que vai ser apagada vai ser a que tem a coluna que foi alvo do clique duplo.
        let id = linhaPaciente.dataset.id;

        colunaAcoes.parentNode.classList.add("fadeOut");
        setTimeout( () => {
            colunaAcoes.parentNode.remove();
            pacienteService.removerPaciente(id);
        }, 500);
    }

    else {
        console.error("Não contém essa classe...");
    }
} );
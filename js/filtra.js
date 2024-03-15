var campoFiltro = document.querySelector("#filtrar-tabela");

// Chamando o escutador de eventos no campo input.
campoFiltro.addEventListener("input", function() {
    console.log(this.value);
    // O valor que foi digitado no campo, que se torna o this do objeto.

    var pacientes = document.querySelectorAll(".paciente");
    // Selecionando todos os elementos que serão filtrados, pela classe.

    if ( this.value.length > 0 ) {
        for (let i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var td_nome = paciente.querySelector(".info-nome");
            var nome = td_nome.textContent;

            var expressao = new RegExp(this.value, "i");
            // Expressão regular para verificar o que foi digitado no campo input, pesquise mais!

            if ( expressao.test(nome) ) {
                paciente.classList.remove("invisivel");
            }
            // Se o que for digitado coincidir com os valores no campo nome, a classe ínvisivel será removida, fazendo o item da lista ser exibido.

            else {
                paciente.classList.add("invisivel");
            }
        }
    }

    else {
        for ( let i = 0; i < pacientes.length; i++ ) {
            let paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
    // Se nada for digitado no campo, será executado um loop for que removerá a classe dos elementos, para que todos os itens da lista apareceram na tela.
});
// Pegando os valores que foram inseridos no formulário através de um escutador de eventos.
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", (event) => {
	event.preventDefault();
	// Prevenindo o comportamento padrão que acontece ao apertar o botão submit.

    var form = document.querySelector("#adiciona");

	if ( validaFormulario(form) ) {
		var paciente = obterPaciente(form);
		// Modo anterior: Colocando os valores na variável, que podem ser pegos pelo id ou name do elemento.
		// Modo atual: Usando um objeto para pegar os dados do formulário.
		console.log(paciente);

		var erros = [];
		validaPaciente(paciente, erros);

		if ( erros.length > 0 ) {
			exibirErro(erros);
			return;
		}

		adicionaPacienteTabela(paciente);

		console.log("Nome:", nome,"\nPeso:", peso+"kg", "\nAltura:", altura+"m", "\nPorcentagem de gordura corporal:", gordura+"%");
		// Modo anterior: Fazendo a exibição no console ficar do jeito que quero.
		form.reset();

		var mensagensErro = document.querySelector("#mensagem-erro");
		mensagensErro.innerHTML = "";
	}
});
// Nesse caso, como foi mais de um comando para executar, foi necessário colocar as chaves.

function validaFormulario(form) {
    var nome = form.nome.value.trim();
    var peso = form.peso.value.trim();
    var altura = form.altura.value.trim();
    var gordura = form.gordura.value.trim();

    if (nome === "" || peso === "" || altura === "" || gordura === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    return true; 
}

// Objeto o paciente através da orientação a objetos.
function obterPaciente(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)
    }

    return paciente;
}

function monta_tr(paciente) {
    var paciente_tr = document.createElement("tr");
	paciente_tr.classList.add("paciente");
	// Adicionando uma classe ao elemento.
    
    var nome_td = monta_td(paciente.nome, "info-nome");
	var peso_td = monta_td(paciente.peso, "info-peso");
	var altura_td = monta_td(paciente.altura, "info-altura");
	var gordura_td = monta_td(paciente.gordura, "info-gordura");
	var imc_td = monta_td(paciente.imc, "info-imc");
	
	paciente_tr.appendChild(nome_td);
	paciente_tr.appendChild(peso_td);
	paciente_tr.appendChild(altura_td);
	paciente_tr.appendChild(gordura_td);
	paciente_tr.appendChild(imc_td);
	// Acresentando os elementos filhos td para o elemento tr criado.

    return paciente_tr;
}

function monta_td(dados, classe) {
    var td = document.createElement("td");
    td.textContent = dados;
	td.classList.add(classe);

    return td;
}

function validaPaciente(paciente, erros) {
    if (paciente.peso.trim() <= "0" || paciente.peso.trim() > 200) {
        erros.push("Valor de peso inválido.");
    }

    if (paciente.altura.trim() <= "0" || paciente.altura.trim() > 3.00 ) {
        erros.push("Valor de altura inválido.");
    }

    if (paciente.gordura.trim() <= "0" || paciente.gordura.trim() > 100) {
        erros.push("Valor de porcentagem de gordura inválido.");
    }

    return erros;
}

function exibirErro(erros) {
	var ul = document.querySelector("#mensagem-erro");
	ul.innerHTML = "";

	erros.forEach( erro => {
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	} );
}

function adicionaPacienteTabela(paciente) {
	var paciente_tr = monta_tr(paciente);
	// Criando o o elemento tr usando uma função.

	var tabela_pacientes = document.querySelector("#tabela-pacientes");
	tabela_pacientes.appendChild(paciente_tr);
	// Selecionando um elemento tbody pelo seu id e acresentando o elemento tr como filho e por consquência os td como netos.
}
// Pegando os valores que foram inseridos no formulário através de um escutador de eventos.
var botaoAdicionar = document.querySelector("#adicionar-paciente");

// Nesse caso, como foi bem mais de um comando para executar ma função aero, foi necessário colocar as chaves.
botaoAdicionar.addEventListener("click", (event) => {
	event.preventDefault();
	// Prevenindo o comportamento padrão que acontece ao apertar o botão submit.

    var form = document.querySelector("#adiciona");

	var paciente = obterPaciente(form);
	// Modo anterior: Colocando os valores na variável, que podem ser pegos pelo id ou name do elemento.
	// Modo atual: Usando um objeto para pegar os dados do formulário.
	console.log(paciente);

	var erros = [];
	validaPaciente(paciente, erros);
	// Definindo um array e chamando uma função, que usa como parâmetros o objeto e a array criada.

	if ( erros.length > 0 ) {
		exibirErro(erros);
		return;
	}
	// Se tiver algo naquele vetor, uma função será chamada, para exibir os erros.

	adicionaPacienteTabela(paciente);
	// Função para fazer o que está escrito na linha de cima.

	console.log("Nome:", nome,"\nPeso:", peso+"kg", "\nAltura:", altura+"m", "\nPorcentagem de gordura corporal:", gordura+"%");
	// Modo anterior: Fazendo a exibição no console ficar do jeito que quero.

	form.reset();
	//Restaurando o formulário para seu estado padrão, para que os campos não fiquem preenchidos após o paciente ser adicionado.

	var mensagensErro = document.querySelector("#mensagem-erro");
	mensagensErro.innerHTML = "";
	// Definindo qual vai ser o elemento onde serão exibidas as mensagens de erro e o seu valor padrão, que é não ter conteúdo, para que as mensagens não persistam na tela caso um paciente seja adicionado sem erros.
});

// Obtendo o paciente através da orientação a objetos.
function obterPaciente(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)
    }
	// Pegando os dados do formulário e chamando uma função que faz o cálculo do IMC.

    return paciente;
	// Retornando esses dados para o sistema, que serão armazenados na variável paciente lá em cima.
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
// Função para criar a tr, já chamando outra função para criar as tds, colocando seus valores e classes.

function monta_td(dados, classe) {
    var td = document.createElement("td");
    td.textContent = dados;
	td.classList.add(classe);

    return td;
}

function validaPaciente(paciente, erros) {
	if (paciente.nome.trim() === "") {
        erros.push("O campo nome não pode estar vazio.");
    }

	if ( paciente.peso.trim() === "" ) {
		erros.push("O campo peso não pode estar vazio.")
	}

    else if ( !validaPeso(paciente.peso) ) {
        erros.push("Valor de peso inválido.");
    }

	if ( paciente.altura.trim() === "" ) {
		erros.push("O campo altura não pode estar vazio.")
	}

    else if ( !validaAltura(paciente.altura) ) {
        erros.push("Valor de altura inválido.");
    }

	if ( paciente.gordura.trim() === "" ) {
		erros.push("O campo de porcentagem de gordura não pode estar vazio.")
	}

    else if (paciente.gordura.trim() <= "0" || paciente.gordura.trim() > 100) {
        erros.push("Valor de porcentagem de gordura inválido.");
    }

    return erros;
}
// Validando os dados que foram inseridos no formulário, se os campos estão vazios ou tem valores muito baixos ou altos e se for o caso o vetor de erros terá dados inseridos nele.

function exibirErro(erros) {
	var ul = document.querySelector("#mensagem-erro");
	ul.innerHTML = "";

	erros.forEach( erro => {
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	} );
}
// Usando elementos de lista para exibir os erros.

function adicionaPacienteTabela(paciente) {
	var paciente_tr = monta_tr(paciente);
	// Criando o o elemento tr usando uma função.

	var tabela_pacientes = document.querySelector("#tabela-pacientes");
	tabela_pacientes.appendChild(paciente_tr);
	// Selecionando um elemento tbody pelo seu id e acresentando o elemento tr como filho e por consquência os td como netos.
}
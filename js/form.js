// Pegando os valores que foram inseridos no formulário através de um escutador de eventos.
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", (event) => {
	event.preventDefault();
	// Prevenindo o comportamento padrão que acontece ao apertar o botão submit.

    var form = document.querySelector("#adiciona");
	var paciente = obterPaciente(form);
	// Modo anterior: Colocando os valores na variável, que podem ser pegos pelo id ou name do elemento.
    // Modo atual: Usando um objeto para pegar os dados do formulário.
    console.log(paciente);

	var paciente_tr = monta_tr(paciente);
    // Criando o o elemento tr usando uma função.

	var tabela_pacientes = document.querySelector("#tabela-pacientes");
	tabela_pacientes.appendChild(paciente_tr);
	// Selecionando um elemento tbody pelo seu id e acresentando o elemento tr como filho e por consquência os td como netos.

	console.log("Nome:", nome,"\nPeso:", peso+"kg", "\nAltura:", altura+"m", "\nPorcentagem de gordura corporal:", gordura+"%");
	// Modo anterior: Fazendo a exibição no console ficar do jeito que quero.
    form.reset(); 
});

// Nesse caso, como foi mais de um comando para executar, foi necessário colocar as chaves.

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
    
    var nome_td = monta_td(paciente.nome);
	var peso_td = monta_td(paciente.peso);
	var altura_td = monta_td(paciente.altura);
	var gordura_td = monta_td(paciente.gordura);
	var imc_td = monta_td(paciente.imc);
	
	paciente_tr.appendChild(nome_td);
	paciente_tr.appendChild(peso_td);
	paciente_tr.appendChild(altura_td);
	paciente_tr.appendChild(gordura_td);
	paciente_tr.appendChild(imc_td);
	// Acresentando os elementos filhos td para o elemento tr criado.

    return paciente;
}

function monta_td(dados) {
    var td = document.createElement("td");
    td.textContent = dados;

    return dados;
}


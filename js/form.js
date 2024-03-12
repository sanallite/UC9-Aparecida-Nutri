// Pegando os valores que foram inseridos no formulário através de um escutador de eventos.
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", (event) => {
	event.preventDefault();
	// Prevenindo o comportamento padrão que acontece ao apertar o botão submit.

	var form = document.querySelector("#adiciona");
	var nome = form.nome.value;
	var peso = form.peso.value;
	var altura = form.altura.value;
	var gordura = form.gordura.value;
	// Colocando os valores na variável, que podem ser pegos pelo id ou name do elemento.

	var paciente_tr = document.createElement("tr");

	var nome_td = document.createElement("td");
	var peso_td = document.createElement("td");
	var altura_td = document.createElement("td");
	var gordura_td = document.createElement("td");
	var imc_td = document.createElement("td");
	// Criando os novos elementos.

	// var imc = peso / Math.pow(altura, 2);
	// Fazendo o cálculo do IMC.

	nome_td.textContent = nome;
	peso_td.textContent = peso;
	altura_td.textContent = altura;
	gordura_td.textContent = gordura;
	imc_td.textContent = calculaIMC(peso, altura);
	// Definindo o conteúdo dos novos elementos, com o imc tendo apenas duas casas decimais.

	paciente_tr.appendChild(nome_td);
	paciente_tr.appendChild(peso_td);
	paciente_tr.appendChild(altura_td);
	paciente_tr.appendChild(gordura_td);
	paciente_tr.appendChild(imc_td);
	// Acresentando os elementos filhos td para o elemento tr criado.

	var tabela_pacientes = document.querySelector("#tabela-pacientes");
	tabela_pacientes.appendChild(paciente_tr);
	// Selecionando um elemento tbody pelo seu id e acresentando o elemento tr como filho e por consquência os td como netos.

	console.log("Nome:", nome,"\nPeso:", peso+"kg", "\nAltura:", altura+"m", "\nPorcentagem de gordura corporal:", gordura+"%");
	// Fazendo a exibição no console ficar do jeito que quero.
});

// Nesse caso, como foi mais de um comando para executar, foi necessário colocar as chaves.
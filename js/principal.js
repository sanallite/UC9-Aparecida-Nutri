// alert("Olá mundo.");

// console.log(document.querySelector("h1")); Selecionando todos os elementos h1.

let titulo = document.querySelector("h1");
// Armazenando o elemento selecionado numa variável.


// Exemplo de função nomeada:
titulo.addEventListener("click", mostrarMensagem);

function mostrarMensagem() {
	console.log("Título foi clicado");
}

// Exemplo de função anônima:
titulo.addEventListener("click", function() {
console.log("Função criada na função anônima.") });

// Exemplo de aero function, que também funciona sem colocar as chaves após a seta:
titulo.addEventListener("click", () => 
console.log("Função criada na função aero!") );

console.log(titulo.textContent);
// Exibindo apenas o conteúdo em texto que está dentro daquele elemento armazenado na variável.

titulo.textContent = "Aparecida Nutricionista";
console.log(titulo.textContent);
// Alterando o conteúdo daquele elemento e exibindo o resultado.

console.log(document.querySelector("h2"));

let titulo_classe = (document.querySelector(".titulo"));
console.log(titulo_classe.textContent);
// Selecionando um elemento pela classe.

let paciente = document.querySelector("#primeiro-paciente");
// Selecionando o elemento com id.

let pacientes = document.querySelectorAll(".paciente");
// console.log(pacientes);
for (let i = 0; i < pacientes.length; i++) {
	const paciente = pacientes[i];
	
	let td_peso = paciente.querySelector(".info-peso");
	let td_altura = paciente.querySelector(".info-altura");
	let td_gordura = paciente.querySelector(".info-gordura");
	let td_imc = paciente.querySelector(".info-imc");
	// Selecionando os elementos filhos através de suas classes, utilizando o nome da variável.

	let altura = td_altura.textContent;
	let peso = td_peso.textContent;
	// Definindo que os valores são o conteúdo daqueles elementos armazenados.

	// let altura_quadrado = altura*altura;
	// let imc = peso/altura_quadrado;
	// let imc = peso / ( altura*altura );
	let imc = peso / Math.pow(altura, 2);
	// Fazendo o cálculo.

	td_imc.textContent = imc.toFixed(2);
	// Definindo o valor para aquele elemento, e adicionando duas casas decimais para exibição.
}

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

	var imc = peso / Math.pow(altura, 2);
	// Fazendo o cálculo do IMC.

	nome_td.textContent = nome;
	peso_td.textContent = peso;
	altura_td.textContent = altura;
	gordura_td.textContent = gordura;
	imc_td.textContent = imc.toFixed(2);
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
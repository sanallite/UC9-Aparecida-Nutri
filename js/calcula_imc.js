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
// Selecionando todos os eventos com a classe.

// console.log(pacientes);

for (let i = 0; i < pacientes.length; i++) {
	const paciente = pacientes[i];
	
	let td_peso = paciente.querySelector(".info-peso");
	let peso = td_peso.textContent;

	let td_altura = paciente.querySelector(".info-altura");
	let altura = td_altura.textContent

	let td_gordura = paciente.querySelector(".info-gordura");
	// Não utilizado no momento.

	let td_imc = paciente.querySelector(".info-imc");
	// Selecionando os elementos filhos através de suas classes, utilizando o nome da variável.

	let alturaValida = validaAltura(altura);
	let pesoValido = validaPeso(peso);
	// Definindo uma variável que chama uma função, utilizando como parâmetro os valores que estão dentro de cada coluna.

	if ( !pesoValido && !alturaValida ) {
		td_imc.textContent = "Peso e altura inválidos!";
		paciente.classList.add("paciente-invalido");
	}
	
	else if (!pesoValido) {
		td_imc.textContent = "Peso inválido!";
		paciente.classList.add("paciente-invalido");
	}

	else if (!alturaValida) {
		td_imc.textContent = "Altura inválida!";
		paciente.classList.add("paciente-invalido");
	}

	if (pesoValido && alturaValida) {		
		var imc = calculaIMC(peso,altura);
		td_imc.textContent = imc;
	}
	// Dependendo do resultado da verificação, o conteúdo da coluna, ou elemento td, será alterado e terá sua classe alterada, para o estilo do elemento mude.

	// let altura_quadrado = altura*altura;
	// let imc = peso/altura_quadrado;
	// let imc = peso / ( altura*altura );
	// let imc = calculaIMC(peso, altura);
	// Formas de fazer o cálculo.
}

function calculaIMC(peso, altura) {
	let imc = 0;
	imc = peso / Math.pow(altura, 2);
	return imc.toFixed(2);
}

function validaPeso(peso) {
	if (peso > 0 && peso <= 650) {
		return true;
	}
	else {
		return false;
	}
}

function validaAltura(altura) {
	if (altura > 0 && altura <= 3.00) {
		return true;
	}
	else {
		return false;
	}
}
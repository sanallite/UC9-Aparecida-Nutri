const listaPacientes = () => {
    return fetch('http://localhost:3000/pacientes').then( resposta => {
        return resposta.json();
    } );
}

const CriarNovaLinha = (nome, peso, altura, porcentagem_gordura, imc) => {
    const NovaLinha = document.createElement("tr");
    NovaLinha.classList.add("paciente");

    const valor_imc = calculaIMC(peso, altura);

    const pesoValido = validaPeso(peso);
    const alturaValida = validaAltura(altura);

    var td_imc = document.createElement("td");
    td_imc.classList.add("info-imc");

    if ( !pesoValido && !alturaValida ) {
		td_imc.textContent = "Peso e altura inválidos!";
		NovaLinha.classList.add("paciente-invalido");
	}
	
	else if (!pesoValido) {
		td_imc.textContent = "Peso inválido!";
		NovaLinha.classList.add("paciente-invalido");
	}

	else if (!alturaValida) {
		td_imc.textContent = "Altura inválida!";
		NovaLinha.classList.add("paciente-invalido");
	}

    else {
        td_imc.textContent = valor_imc;
    }

    const conteudo = 
    `<td class="info-nome">${nome}</td>
    <td class="info-peso">${peso}</td>
    <td class="info-altura">${altura}</td>
    <td class="info-gordura">${porcentagem_gordura}</td>`;

    NovaLinha.innerHTML = conteudo;
    NovaLinha.appendChild(td_imc);
    return NovaLinha;
}

const tabela = document.querySelector("#tabela-pacientes")

listaPacientes().then ( promise => {
    promise.forEach( element => {
        tabela.appendChild(CriarNovaLinha(element.nome, element.peso, element.altura, element.porcentagem_gordura, element.imc));
    });
} );

/* Forma anterior de obter os dados do banco json local:
const http = new XMLHttpRequest();
http.open('GET', 'http://localhost:3000/pacientes');

http.onload = () => {
    const data = JSON.parse(http.response);
    console.log(data);

    data.forEach(element => {
        tabela.appendChild(CriarNovaLinha(element.nome, element.peso, element.altura, element.porcentagem_gordura, element.imc));
    });
}

http.send(); */
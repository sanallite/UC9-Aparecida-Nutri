import { pacienteService } from "./service.js";
import { validacao } from "./service.js";

const CriarNovaLinha = (nome, peso, altura, porcentagem_gordura, imc, id) => {
    const NovaLinha = document.createElement("tr");
    NovaLinha.classList.add("paciente");

    const valor_imc = validacao.calculaIMC(peso, altura);

    const pesoValido = validacao.validaPeso(peso);
    const alturaValida = validacao.validaAltura(altura);
    const porcentagemValida = validacao.validaGordura(porcentagem_gordura);

    var td_imc = document.createElement("td");
    td_imc.classList.add("info-imc");

    var td_gordura = document.createElement("td");
    td_gordura.classList.add("info-gordura");

    var acoes = `<a href="editar.html?id=${id}" class="editar_paciente">Editar</a>
        <a href="" class="excluir_paciente">Excluir</a>`;

    var td_acoes = document.createElement("td");
    td_acoes.innerHTML = acoes;

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

    if ( !porcentagemValida ) {
		td_gordura.textContent = "Porcentagem de gordura inválida!";
		NovaLinha.classList.add("paciente-invalido");
	}

    else {
        td_gordura.textContent = porcentagem_gordura;
    }

    const conteudo = 
    `<td class="info-nome">${nome}</td>
    <td class="info-peso">${peso}</td>
    <td class="info-altura">${altura}</td>`;

    NovaLinha.innerHTML = conteudo;
    NovaLinha.appendChild(td_gordura);
    NovaLinha.appendChild(td_imc);
    NovaLinha.appendChild(td_acoes);
    NovaLinha.dataset.id = id;

    return NovaLinha;
}

const tabela = document.querySelector("#tabela-pacientes")

pacienteService.listaPacientes().then ( promise => {
    promise.forEach( element => {
        tabela.appendChild(CriarNovaLinha(element.nome, element.peso, element.altura, element.porcentagem_gordura, element.imc, element.id));
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
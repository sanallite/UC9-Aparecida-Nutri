import { pacienteService } from "./service.js";
import { validacao } from "./service.js";

const url_pagina = new URL(window.location);
const id_paciente = url_pagina.searchParams.get('id');

const input_nome = document.querySelector('[data-nome]');
const input_peso = document.querySelector('[data-peso]');
const input_altura = document.querySelector('[data-altura]');
const input_gordura = document.querySelector('[data-gordura]');
let imc;

pacienteService.pacienteEscolhido(id_paciente).then( dados => {
    console.log(dados);
    console.log(dados.nome);
    console.log(dados.peso)
    input_nome.value = dados.nome
    input_peso.value = dados.peso
    input_altura.value = dados.altura
    input_gordura.value = dados.porcentagem_gordura

    let peso = input_peso.value;
    let altura = input_altura.value;

    imc = validacao.calculaIMC(peso, altura);
    console.log(imc);
})

const form = document.querySelector("#editar");
form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    if (typeof imc !== 'undefined') {
        pacienteService.editarPaciente(id_paciente, input_nome.value, input_peso.value, input_altura.value, input_gordura.value, imc)
            .then(() => {
                window.location.href = "../index_json.html";
            })
            .catch(error => {
                console.error("Erro ao editar paciente:", error);
            });
    } else {
        console.error("IMC não foi definido.");
        // Handle the case where imc is not defined, such as displaying an error message
    }
})

const CriarNovaLinha = (nome, peso, altura, porcentagem_gordura, imc) => {
    const NovaLinha = document.createElement("tr");
    NovaLinha.classList.add("paciente");

    const conteudo = 
    `<td class="info-nome">${nome}</td>
    <td class="info-peso">${peso}</td>
    <td class="info-altura">${altura}</td>
    <td class="info-gordura">${porcentagem_gordura}</td>
    <td class="info-imc">${imc}</td>`;

    NovaLinha.innerHTML = conteudo;
    return NovaLinha;
}

const tabela = document.querySelector("#tabela-pacientes");

const http = new XMLHttpRequest()

http.open('GET', 'http://localhost:3000/profile')

http.send()

http.onload = () => {
    const data = JSON.parse(http.response);
    console.log(data);

    data.forEach(element => {
        tabela.appendChild(CriarNovaLinha(element.nome, element.peso, element.altura, element.porcentagem_gordura, element.imc));
    });
}
const listaPacientes = () => {
    return fetch('http://localhost:3000/pacientes').then( resposta => {
        return resposta.json();
    } );
}

const pacienteEscolhido = (id) => {
    return fetch(`http://localhost:3000/pacientes/${id}`).then( resposta => {
        return resposta.json();
    } );
}

const cadastrarPaciente = (paciente) => {
    return fetch('http://localhost:3000/pacientes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: paciente.nome,
            peso: paciente.peso,
            altura: paciente.altura,
            porcentagem_gordura: paciente.gordura,
            imc: paciente.imc
        })
    }).then( resposta => {
            return resposta.body;
        } )
}

const editarPaciente = (id, nome, peso, altura, porcentagem_gordura, imc) => {
    return fetch(`http://localhost:3000/pacientes/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            peso: peso,
            altura: altura,
            porcentagem_gordura: porcentagem_gordura,
            imc: imc
        })
    }).then(resposta => {
        return resposta.json()
    })
}

const removerPaciente = (id) => {
    return fetch(`http://localhost:3000/pacientes/${id}`, {
        method: 'DELETE'
    })
}

const calculaIMC = (peso, altura) => {
	let imc = 0;
	imc = peso / Math.pow(altura, 2);
	return imc.toFixed(2);
}

const validaPeso = (peso) => {
	if (peso > 0 && peso <= 650) {
		return true;
	}
	else {
		return false;
	}
}

const validaAltura = (altura) => {
	if (altura > 0 && altura <= 3.00) {
		return true;
	}
	else {
		return false;
	}
}

const validaGordura = (porcentagem) => {
	if (porcentagem > 0 && porcentagem <= 100) {
		return true;
	}

	else {
		return false;
	}
}

export const validacao = {
	calculaIMC,
	validaPeso,
	validaAltura,
	validaGordura
}

export const pacienteService = {
    listaPacientes,
    pacienteEscolhido,
    cadastrarPaciente,
    editarPaciente,
    removerPaciente
}
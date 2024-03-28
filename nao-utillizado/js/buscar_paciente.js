var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");

    var erroAjax = document.querySelector("#erro-ajax");

    xhr.addEventListener("load", function() {
        erroAjax.classList.add("invisivel");

        if (xhr.status == 200) {            
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
    
            pacientes.forEach(paciente => {
                adicionaPacienteTabela(paciente);
            });
        }else {
            erroAjax.classList.remove("invisivel");
        }

    });

    xhr.send();
});
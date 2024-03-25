var tabela1 = document.querySelector("#tabela-pacientes");

tabela1.addEventListener("dblclick",
    function(event) {
        /* var alvoElemento = event.target; // td
        var paiElemento = alvoElemento.parentNode; // tr
        paiElemento.remove(); */

        event.target.parentNode.classList.add("fadeOut");
        setTimeout( () => {
            event.target.parentNode.remove();
        }, 500);
    }
);

const removerPaciente = () => {
    return fetch("http://localhost:3000/pacientes/${id}", {
        method: 'DELETE'
    })
}
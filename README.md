Esse projeto utiliza um banco de dados local num arquivo JSON para exibir uma lista de pacientes, o usuário pode manipular esse banco, inserido, atualizando e removendo pacientes do banco, através de formulários e uma tabela para exibir os pacientes.

São utilizados comandos para exportar e importar constantes que contém funções para manipular o banco de dados e validar os dados inseridos pelo usuário, também sendo utilizado o método fetch para pegar os itens do banco.

Para o funcionamento do projeto é necessário instalar o node.js, json-server e o browser-sync.

Inicializar o servidor local, na pasta principal:
```json-server --watch db.json```

Acessar o arquivo index pelo browser sync:
```browser-sync start --server --file . --host --port 5000 --startPath index_json.html```

Os arquivos não utilizados são de uma versão anterior, onde os pacientes foram inseridos no próprio html e apenas inseridos na tabela e os arquivos valida form são de outra atividade.

Nesse projeto aprendi bastante sobre selecionar elementos do html e usar funções no JS, além de manipular um banco de dados JSON, com a principal referência sendo o outro projeto no repositório "js_assincrono_crud".

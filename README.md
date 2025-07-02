# Curso Técnico - UC9 - Desenvolvimento Back-End
Nona unidade curricular do meu curso técnico no Senac, no módulo web back-end.

## Descrição
Esse projeto utiliza um banco de dados local num arquivo JSON para exibir uma lista de pacientes, o usuário pode manipular esse banco, inserido, atualizando e removendo pacientes do banco, através de formulários e uma tabela para exibir os pacientes.
 
Os scripts utilizam módulos ES6 e o método fetch para acessar o arquivo JSON.

Os arquivos não utilizados são de uma versão anterior, onde os pacientes foram inseridos no próprio html e apenas na tabela. Os arquivos valida form são de outra atividade.

Nesse projeto aprendi mais sobre selecionar elementos do HTML e usar funções no JavaScript, além de usar um arquivo JSON como um banco de dados, com a principal referência sendo o outro projeto dessa unidade curricular no repositório [UC9-js_assincrono_crud](https://github.com/sanallite/UC9-js_assincrono_crud/tree/main).

## Executando o Projeto
* Instale se for necessário o Node.js
* Instale os pacotes ``json-server`` e ``browser-sync``
* Na pasta raiz, execute o comando para acessar o arquivo JSON e usá-lo como um servidor local:

      json-server --watch db.json

* Acesse o arquivo index pelo browser sync:

      browser-sync start --server --file . --host --port 5000 --startPath index_json.html

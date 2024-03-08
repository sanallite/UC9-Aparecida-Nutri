// alert("Olá mundo.");

			// console.log(document.querySelector("h1")); Selecionando todos os elementos h1.

			let titulo = document.querySelector("h1");
			// Armazenando o elemento selecionado numa variável.

			console.log(titulo.textContent);
			// Exibindo apenas o conteúdo em texto que está dentro daquele elemento armazenado na variável.

			titulo.textContent = "Aparecida Nutricionista";
			console.log(titulo.textContent);
			// Alterando o conteúdo daquele elemento e exibindo o resultado.

			console.log(document.querySelector("h2"));

			let titulo_classe = (document.querySelector(".titulo"));
			console.log(titulo_classe.textContent);
			// Selecionando um elemento pela classe.
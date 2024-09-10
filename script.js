          // Função para verificar a quantidade de vezes que a letra 'a' (maiúscula ou minúscula) ocorre na string
            function verificarLetraA() {
                let texto = document.getElementById('texto').value;
                let resultado = document.getElementById('resultado');

                // Verifica se o input está vazio
                if (texto === "") {
                    resultado.textContent = "Por favor, insira uma string válida.";
                    resultado.style.color = "red";
                    return;
                }

                // Contagem de ocorrências de 'a' e 'A'
                let contagem = 0;
                for (let i = 0; i < texto.length; i++) {
                    if (texto[i].toLowerCase() === 'a') {
                        contagem++;
                    }
                }

                // Exibe o resultado
                if (contagem > 0) {
                    resultado.textContent = `A letra 'a' aparece ${contagem} vezes na string.`;
                    resultado.style.color = "green";
                } else {
                    resultado.textContent = "A letra 'a' não foi encontrada na string.";
                    resultado.style.color = "red";
                }
            }
        
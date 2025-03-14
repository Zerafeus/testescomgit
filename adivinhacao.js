// Importa o modulo 'readline' para capturar a entrada do usuario
const readline = require('readline');

//Configure a interface para entrada de dados no terminal
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Gera um número aleatório entre 1 e 10, possivelmente.
const numeroSecreto = Math.floor(Math.random() * 10) + 1;

// Exibe uma mensagem para o usuário tentar adivinhar
console.log("\n=== JOGO DE ADIVINHAÇÃO");
console.log("Tente adivinhar o número entre 1 e 10");

// Solicita um palpite do usuário
r1.question("Digite seu palpite: ", (palpite) => {
    //Converte a entrada do usuário para número inteiro
    palpite = parseInt(palpite);

    //Verifica  se o palpite está correto
    if (palpite === numeroSecreto) {
        console.log("Parabéns! Você acertou!");
    } else {
        console.log(`Errado! O numero correto era ${numeroSecreto}. Tente novamente`);
    }

    // Fecha a interface após a resposta
    r1.close();


}
)
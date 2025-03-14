// Importa o módulo 'readline' para capturar a entrada do usuário pelo terminal
const readline = require('readline');

// Configura a interface de leitura do terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Exibe o menu de operações matemáticas

console.log("\n === CALCULADORA SIMPLES ===");
console.log("Escolha uma operação");
console.log("1. Adição (+)");
console.log("2. Subtração (-)");
console.log("3. Multiplicação (*)");
console.log("4. Divisão (/)");

// Solicita que o usuário escolha uma operação
rl.question("Digite o número da operação desejada: ", (opcao) =>{


    //Solicita que o usuário escolha uma operação
    if(["1", "2","3","4"].includes(opcao)){

        //Solicita o primeiro nímero ao usuário
        rl.question("Digite o primeiro número: ", (num1) => {
            // Solicita o segundo número ao usuário
            rl.question("Digite o segundo número: ",(num2) => {

                // Converte as entradas para números
                num1 = parseFloat(num1);
                num2 = parseFloat(num2);
                let resultado;

                // Verifica a operação escolhida e executa o cálculo correspondente
                
                if (opcao === "1"){
                    resultado = num1 + num2;
                    console.log(`\nResultado: ${num1} + ${num2} = ${resultado}`);
                } else if (opcao === "2") {
                    resultado = num1 - num2;
                    console.log(`\nResultado: ${num1} - ${num2} = ${resultado}`);
                } else if (opcao === "3") {
                    resultado = num1 * num2;
                    console.log(`\nResultado: ${num1} * ${num2} = ${resultado}`);
                } else if (opcao === "4") {
                    // Verifica se o divisor é zero para evitar erro matmático
                    if (num2 !== 0){
                    resultado = num1 / num2;
                    console.log(`\nResultado: ${num1} / ${num2} = ${resultado}`);
                    } else {
                        console.log("\nErro: Divisão por zero não é permitida.");
                    }
                }
                
                // Fecha a interface após o cálculo
                rl.close();



            })
        })

    } else {
        // Se o usuário escolher uma opção inválida
        console.log("\n Opção inválida! Reinicie o programa e escolha uma opção válida.");
        rl.close(); //Fecha a interface de entrada
    }

});
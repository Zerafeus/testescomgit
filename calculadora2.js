const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

//Funções para as operações da calculadora

function soma(a,b) { return a + b}
function subtracao(a,b) { return a - b}
function multiplicacao(a,b) { return a * b}
function divisao(a,b) { return a / b}


//Solicita a operação e os números ao usuário
readline.question('Escolha a operação( soma, subtracao, multiplicacao , divisao): ', operacao =>{
    readline.question('Digite o primeiro número: ', num1 =>{
        readline.question('Digite o segundo número: ', num2 =>{
            const a = parseFloat(num1);
            const b = parseFloat(num2);

            switch(operacao) {
                case 'soma':
                    console.log(`Resultado: ${soma(a, b)}`);
                    break;
                case 'subtracao':
                    console.log(`Resultado: ${subtracao(a, b)}`);
                    break;
                case 'multiplicacao':
                    console.log(`Resultado: ${multiplicacao(a, b)}`);
                    break;
                case 'divisao':
                    console.log(`Resultado: ${divisao(a, b)}`);
                    break;
                default:
                    console.log('Operação não reconhecida.');
            }
            readline.close();
        });
    });
});
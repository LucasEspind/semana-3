// let continuar = true;
// do {
//     let escolha = prompt("O que quer fazer?\n\n1- Verificar qual número é maior\n2- Contar até tal número\n3- Primeiro número inteiro elevado ao quadrado maior que 1000:\n4- Contagem regressiva (log)\n5- Sair");
//     switch (parseInt(escolha)) {
//         case 1:
//             let valor1 = parseFloat(prompt("Digite um número: "));
//             let valor2 = parseFloat(prompt("Digite outro número: "));
//             if (!isNaN(valor1) && !isNaN(valor2)) {
//                 if (valor1 == valor2) {
//                     alert("Os números informados são iguais!");
//                 } else if (valor1 > valor2) {
//                     alert("O número " + valor1 + " é maior que o número " + valor2);
//                 } else if (valor1 < valor2) {
//                     alert("O número " + valor1 + " é menor que o número " + valor2);
//                 }
//             } else {
//                 alert("Os dados informados não são números");
//             }
//             break;
//         case 2:
//             let contar = prompt("Quer  contar até quanto?");
//             let contando = []
//             for (let i = 1; i <= contar; i++) {
//                 contando.push(i);
//             }
//             alert(contando);
//             break;
//         case 3:
//             let numero = 1;

//             while (numero * numero <= 1000) {
//                 numero++;
//             }

//             alert("O primeiro número inteiro cujo quadrado é maior que 1000 é: " + numero);
//             break;
//         case 4:
//             let contador = 1;

//             alert("Contagem regressiva iniciada!");

//             const intervalId = setInterval(() => {
//                 (contador);
//                 if (contador === 10) {
//                     clearInterval(intervalId);
//                     alert("Contagem regressiva finalizada!");
//                 }

//                 contador++;
//             }, 1000);
//             setTimeout(() => {

//             }, 10000);
//             break;
//         case 5:
//             continuar = false;
//             break;
//         default:
//             alert("Opção inválida!");
//             break;
//     }
// } while (continuar);

// function intervalExemplo(tempoInicial) {
//     let tempoRestante = tempoInicial;

//     console.log(`A contagem regressiva começou: ${tempoRestante} segundos restantes.`);

//     const intervalId = setInterval(() => {
//         tempoRestante--;

//         if (tempoRestante > 0) {
//             console.log(`${tempoRestante} segundos restantes.`);
//         } else {
//             clearInterval(intervalId);
//             console.log("A contagem regressiva terminou!");
//         }
//     }, 1000);
// }


// intervalExemplo(5);

// function timeoutExemplo(mensagem, delay) {
//     setTimeout(() => {
//       console.log(mensagem);
//     }, delay);
//   }

//   timeoutExemplo("3 Segundos que você está na página!", 3000);

// Função que será executada quando o botão for clicado
function handleClick() {
    console.log("O botão foi clicado!");
}


const botao = document.getElementById("botao");


botao.addEventListener("click", handleClick);


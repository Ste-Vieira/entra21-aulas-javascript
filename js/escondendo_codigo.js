// console.log("Hello World"); //o console aceita parâmetros para exibir em LOG
// console.log("Stephanie " + 28 + " anos"); //é possível concatenar textos e variáveis igual ao java
// console.log("Stephanie", 28, "anos"); //o console aceita infinitos parâmentos, basta separar por vírgula


// let nome = "Stephanie"; //let cria uma variável com escopo limitado
// var sobrenome = "Vieira"; //var cria uma variável que continua existindo mesmo depois do escopo
// console.log(nome);
// console.log("Meu nome é " + nome);
// console.log("Meu nome é", nome);
// console.log('Meu nome é "+nome+" mais me chamo também de "Tefi"');
// console.log(`Meu nome é ${nome}`);
// console.log("No momento nome é do tipo " + typeof (nome));
// nome = 10;
// console.log("No momento nome é do tipo " + typeof (nome));
// nome = false;
// console.log("No momento nome é do tipo " + typeof (nome));
// nome = "";
// console.log("No momento nome é do tipo " + typeof (nome));

// let idade = 28;
// let altura = 1.69;
// console.log(`A variável idade é do tipo ${typeof (idade)} e a variável altura é do tipo ${typeof (altura)}`);

// // let mensagem = prompt("O que você está pensando?");
// // let interromper = prompt("Estou interrompendo?")
// // console.log("Você está pensando " + mensagem);
// // console.log("A informação capturado é do tipo " + typeof (mensagem));



// console.log("Os operadores aritmeticos são os mesmos do java +, -, *, /, %");
// console.log("Somando " + (1 + 2));
// console.log("Subtraindo " + (3 - 1));
// console.log("Multiplicando " + (3 * 2));
// console.log("Dividindo " + (6 / 2));


// if (idade < 18) {
//     console.log("É menor de idade");
// } else {
//     console.log("É maior de idade");
// }

// if (altura < 1.5) {
//     console.log("Baixinho");
// } else if (altura < 1.7) {
//     console.log("Mais ou menos");
// } else if (altura < 1.9) {
//     console.log("Tu é grande");
// } else {
//     console.log("Gigante");
// }

// let resposta = (altura < 2 ? "Altura normal" : "Gigante");
// switch (idade) {
//     case 1:
//         console.log("um aninho");
//         break;
//     case 2:
//         console.log("dois aninhos");
//         break;
//     default:
//         console.log("chega ta bom");
//         break;
// }


//EXERCÍCIO DA AULA

let nome = prompt("Qual seu nome?")
let idade = prompt("Qual sua idade?")
let cidade = prompt("Qual cidade você mora?")
console.log("Bem vindo "+nome+", vejo que você tem "+idade+ " de idade e mora em "+cidade+".");

console.log("Esse site é apenas para desenvolvedores não importa a idade nem onde mora, mas o importante é ter vontade de aprender.");
console.log("Veja os operadores matemáticos em ação");
console.log("Somando"+(1+2));
console.log("Subtraindo"+(2-5));
console.log("Multiplicando"+(3*10));
console.log("Dividindo"+(50/10));

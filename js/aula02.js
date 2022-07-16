procedimento(); //chamada
//essa função está sendo chamada e não precisa de argumentos
bemVindo("Stephanie");
bemVindo(true);
bemVindo(30);
bemVindo(bemVindo);
bemVindo(1.78);

login("Stephanie", "1234");

maiorIdade(15);

let resultado = maiorIdade(16);
console.log(resultado);
console.log(maiorIdade(18));

let concatenado = maiorIdade(10) + maiorIdade(20);
console.log(concatenado);

console.log(calcularMedia(8, 9, 10))

console.log(verificarSituacao(5));

console.log(
    verificarSituacao(
        calcularMedia(8, 9, 10)
    )
);

function procedimento() { //declaração

    console.log("Esse tipo de função sempre executa da mesma forma, porque não tenho parâmetros para deixar dinâmico");

    console.warn("Essa função também não retorna nada");
}

procedimento(); //chamada

function bemVindo(nome) {
    console.log(typeof (nome));
    console.warn("Bem-vindo ", nome);
}

function login(userName, password) {
    console.error("O usuário " + userName + " cuja senha é " + password + " está inadimplente, não pode entrar")
}

function maiorIdade(idade) {
    if (idade < 18) {
        return "Menor de idade"
    } else {
        return "Maior de idade"
    }
}

function calcularMedia(nota01, nota02, nota03) {
    return (nota01 + nota02 + nota03) / 3
}

function verificarSituacao(media) {
    return media >= 7 ? "Aprovado" : "Reprovado";
}

//EXERCÍCIO AULA

function adicao(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {

    return a / b;
}


console.log("Somando", adicao(2, 2));
console.log("Subtraindo", subtracao(4, 2));
console.log("Multiplicando", multiplicacao(2, 2));
console.log("Dividindo", divisao(10, 2));


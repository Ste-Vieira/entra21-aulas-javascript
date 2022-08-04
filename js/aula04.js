console.group("Ler conteudos com jQuery")
console.log($("#paragrafo_1"));
console.log($("#paragrafo_1").text());


console.groupEnd()

console.group("Alterar conteudos com jQuery")
$("#paragrafo_2").text("Conteudo escrito com jQuery")
console.log($("#paragrafo_2").text());

console.groupEnd()

console.group("Ler varios conteudo com jQuery")
let lista = $("p")
console.log(lista);
console.log(lista.text());

$("p").each(function () {
    console.log(this.textContent);
})
console.groupEnd()

console.group("Escrever varios conteúdos com jQuery")
$("li").text("li escrito com jQuery")
console.groupEnd

console.group("Criar elementos com jQuery")
$("<button>", {
    text: "clique aqui",
    class: "btn btn-outline-primary"
}).appendTo("body")

$("body").append(
    $("<br>"),
    $("<b>", { text: "Texto negrito" }),
    $("<br>"),
    $("<i>", { text: "Texto itálico" })
)
console.groupEnd()


console.group('Mais de um item com jQuery');
$("<u>").append(
    $("<li>", {
        text: "Primeiro item"
    }),
    $("<li>", {
        text: "Segundo item"
    }),
    $("<li>", {
        text: "Terceiro item"
    }),
).appendTo("#paragrafo_3")

console.groupEnd();

console.log("==================");
console.group('Exercicio criar mais itens');

console.log('====================================================================')
console.group(`Exercise writen more iten`)

// One table 
// Thead
//th
//th
//th

// Tbody
//tr
//td
//td
//td
//tr
//td
//td
//td

//
$("<table>", { class: "table table-dark table-striped table-bordered table-hover" }).append(
    $("<Thead>", { class: "bg-dark" }).append(
        $("<th>", { text: "Nome" }),
        $("<th>", { text: "Idade" }),
        $("<th>", { text: "Cidade" })
    ),
    $("<Tbody>").append(
        $("<tr>").append(
            $("<td>", { text: "Fulano" }),
            $("<td>", { text: "33" }),
            $("<td>", { text: "Blumenau" }),
        ),
        $("<tr>").append(
            $("<td>", { text: "Ciclano" }),
            $("<td>", { text: "25" }),
            $("<td>", { text: "Imbituba" }),
        )
    )
).appendTo("body") //colocado no body

console.groupEnd();

console.log("-----------------------");

console.group('Eventos de click em qualquer lugar');
$("p").on("click", function () {
    alert("Opa")
})

$("li").on("click", function () {
    console.warn("Opaaa");
})

console.groupEnd();


console.group('Exercicio jQuery');
$("#add").on("click", function () {
    $("<p>", { text: "Olááááá", class: "alert alert-danger" }).appendTo("body")
})

$("#clean").on("click", function () {
    $(".alert").remove()
 })

console.groupEnd();
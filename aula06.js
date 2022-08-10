
// $.ajax()

// $.ajax(
//     {

//     }
// )

$("#meu_ip").on("click", function () {
    $.ajax(
        {
            url: "https://httpbin.org/ip",
            type: "get",
            success: function (retorno) {
                console.log("Opa funcionou", retorno);
            },
            error: function (motivo) {
                console.warn("Deu ruim", motivo);
            },
        });

})


$("#eco_get").on("click", function () {

    $.ajax(
        {
            url: "https://httpbin.org/get?nome=stephanie&idade=28%20anos%20",
            type: "get",
            success: function (retorno) {
                console.log("Deu certo", retorno);
               // informação simplificada console.log("Deu certo", retorno.args);
            },
            error: function (errou) {
                console.log("Errou", errou);
            }
        }
    )
});

$("#delay_get").on("click",()=>{    // function(){} = ()=>{} função anonima

    let numero=$("#tempo").val()
    $.ajax(
        {
        url:encodeURI("https://httpbin.org/delay/"+numero),
        type:"get",
        success:(retorno)=>{
            console.log("Demorou mas deu certo");

        },
        error:(erro)=>{
            console.warn("Erro", erro);
        }
    }
    )
})


$("#eco_post").on("click", ()=>{

    let objeto = {
        nome:$("#nome").val(),
        idade:$("#idade").val()
    };
    $.ajax({
        url:"https://httpbin.org/post",
        type:"post",
        Headers:{
            "Accept":"application/json",
            "Content-Type":"application/json"
        },

        data: JSON.stringify(objeto),
        success: (retorno)=>{
            console.log("Funcionou",objeto);
        },
        error: (erro)=>{
           console.error("Errooo",erro);
        }
    })
    });



    $("#busca_pokemon")
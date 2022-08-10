$("#busca_pokemon").on("click", function () {
    $.ajax(
        {
            url: "https://pokeapi.co/api/v2/pokemon/",
            type: "get",
            success: function (retorno) {
                console.log(retorno.results);
                retorno.results.forEach(tipo => {

                    $("tbody").append(
                        $("<tr>").append(
                            $("<td>", { text: tipo.name }),
                            $("<td>").append(
                                $("<a>", {
                                    class: "btn btn-primary",
                                    text: "buscar",
                                    href: tipo.url
                                }),
                                // $("<a>", {
                                //     class: "table table-bordered",
                                //     text: "imagem",
                                //     href: tipo.url.sprites.front_default
                                // }),
                                $("<button>", {
                                    class: "btn btn-danger",
                                    text: "consultar",
                                    click: () => {
                                        buscarPorTipo(tipo.url)
                                    }
                                })
                            ),
                        )
                    )

                });
            },
            error: function (motivo) {
                console.warn("Erro", motivo);
            },
        })

})

function buscarPorTipo(url) {
    $.ajax({
        url: url,
        type: "get",
        success: (retorno) => {
            console.log("Deu certo", retorno);
        },
        error: function (motivo) {
            console.warn("Erro", motivo);
        }
    })
}


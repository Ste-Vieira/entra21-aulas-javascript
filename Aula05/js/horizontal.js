$("body").attr("class", "container mt-4");

$("<header>", { class: "row" })
  .append(
    $("<section>", { class: "col" }).append(
      $("<div>", { class: "card" }).append(
        $("<div>", { class: "card-body text-center" }).append(
          $("<h1>", { text: "Página horizontal" }),
        ),
        $("<div>", { class: "card-footer" }).append(
          $("<a>", { href: "/vertical.html", text: "VERTICAL", class: "btn btn-outline-primary" }),
        )
      )
    )
  )
  .appendTo("body");

$("<main>", { class: "row" }).append(
  $("<section>", { class: "col" }).append(
    $("<div>", { class: "card" }).append(
      $("div", { class: "card-header", text: "Página em construção" }),
      $("<div>", { class: "card-body" }).append(
        $("<table>", { class: "table table-bordered text-center" }).append(
          $("<thead>").append(
            $("<th>", { text: "Nome" }),
            $("<th>", { text: "Idade" }),
            $("<th>", { text: "Cidade" }),
          ),
          $("<tbody>").append(
            $("<tr>").append(
              $("<td>", { text: "Stephanie" }),
              $("<td>", { text: "28" }),
              $("<td>", { text: "Palhoça" })
            ),
            $("<tr>").append(
              $("<td>", { text: "Henrique" }),
              $("<td>", { text: "19" }),
              $("<td>", { text: "Florianópolis" })
            ),
            $("<tr>").append(
              $("<td>", { text: "Henrique" }),
              $("<td>", { text: "19" }),
              $("<td>", { text: "Florianópolis" })
            )
          )
        )
      ),
      $("<div>", { class: "card-footer", text: "Página desenvolvida como prática da Aula" })
    )
  )
).appendTo("body");


import { conectaApi } from "./conectaApi.js";

const exibicaoNaPagina = document.querySelector("[data-lista]");

function exibeFilme(pagina, poster, altPoster) {
    const exibicaoUmFilme = document.createElement("li");
    exibicaoUmFilme.className = "principal__filmes__filme";
    exibicaoUmFilme.innerHTML = `<a href="${pagina}"><img src="${poster}" alt="${altPoster}" class="principal__filmes__filme__poster"></a>`;
    return exibicaoUmFilme;
};

async function listaFilme() {
    const lista = await conectaApi.listaDeFilmes();
    lista.forEach(elemento => {
        exibicaoNaPagina.appendChild(exibeFilme(elemento.pagina, elemento.poster, elemento.altPoster));
    });
};

listaFilme();

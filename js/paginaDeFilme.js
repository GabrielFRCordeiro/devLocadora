import { conectaApi } from "./conectaApi.js";

const pagina = document.querySelector(".filme");

async function escolheFilme() {
    try {
        const lista = await conectaApi.listaDeFilmes();
        var filme;
        lista.forEach(elemento => {
            if (pagina.dataset.id == elemento.id) {
                filme = elemento;
            }
        });
        return filme;
    } catch (erro) {
        console.log(erro);
    }
};

var filmeDaPagina = escolheFilme();
Promise.resolve(filmeDaPagina)
.then(filme => exibeInformacoes(pagina, filme.titulo, filme.poster, filme.altPoster, filme.descricao));

function exibeInformacoes(conteudo, titulo, poster, altPoster, descricao) {
    const imagem = exibeImagem(poster, altPoster);
    const informacoes = document.createElement("section");
    informacoes.className = "filme__informacoes";
    informacoes.innerHTML = `<h1 class="filme__informacoes__titulo">${titulo}</h1>
    <p class="filme__informacoes__resumo">${descricao}</p>
    <p class="filme__informacoes__preco">R$42,00</p>
    <div class="filme__informacoes__botoes">
        <button class="filme__informacoes__botoes__favoritar">Favoritar</button>
        <button class="filme__informacoes__botoes__sacola">Adicionar à sacola</button>
    </div>`;
    conteudo.appendChild(imagem);
    conteudo.appendChild(informacoes);
    return conteudo;
};

function exibeImagem(poster, altPoster) {
    var imagem = document.createElement("img");
    imagem.className = "filme__poster";
    imagem.src = `../${poster}`;
    imagem.alt = `${altPoster}`;
    return imagem;
};

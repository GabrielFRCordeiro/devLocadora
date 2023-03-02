async function listaDeFilmes() {
    const conexao = await fetch("http://localhost:3000/filmes");
    const conexaoJson = await conexao.json();
    return conexaoJson;
}

export const conectaApi = {
    listaDeFilmes
}

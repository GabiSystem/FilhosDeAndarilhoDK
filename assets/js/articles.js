//js para mostrar os artigos em ordem decrescente na pagina "aventuras"
/* função que vai carregar os html e solicitar a criação do html */
async function loadJson() {
    try{
        const response = await fetch(`https://gabisystem.github.io/FilhosDeAndarilhoDK/data/artigos.json?nocache=${Date.now()}`);
        const data = await response.json();
        const listaArtigos = data.artigos;
        criarHtml(listaArtigos);

    } catch{ console.log("nao foi possivel carregar o json") }
}

/* função que cria html */
function criarHtml(artigos) {
    const container = document.getElementById('containerAventuras');
    artigos.reverse().forEach( artigo => {
        container.innerHTML += `<div class="aventura-grid">
                        <div>
                            <a href="${artigo.url}">
                                <img src=${artigo.img} class="artigo-imagem">
                            </a>
                        </div>
                        <div class="artigo-conteudo">
                            <div class="conteudo-titulo">
                                <a href="${artigo.url}">${artigo.titulo}</a>
                            </div>
                            <div class="conteudo-texto">
                                ${artigo.conteudo} <br>
                                <a href="${artigo.url}">Leia mais</a>
                            </div>
                            <div class="data"><br> Ultima atualização: ${artigo.data}</div>
                        </div>
                    </div>` ;
    });
}

/* inicia as funções quando a página terminar de carregar */
document.addEventListener('DOMContentLoaded', loadJson);

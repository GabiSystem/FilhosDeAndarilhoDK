//js para carregar o conteudo principal do main
/* função para puxar o JSON e conferir o ultimo artigo */
async function pullJson() {

    try{ 
        const response = await fetch(`https://gabisystem.github.io/FilhosDeAndarilhoDK/data/artigos.json?nocache=${Date.now()}`);
        const data = await response.json();
        const artigos = data.artigos;
        const ultimoArtigo = artigos.at(-1);
        criarCnt(ultimoArtigo);

    } catch(error){ console.error("nao foi possivel carregar o JSON, ERROR: ", error); }
}

/* função para criar o HTML do conteudo principal */
function criarCnt(artigo){
    const container = document.getElementById('primaryCnt');
    container.innerHTML += `<div class="main-cnt-title"> Ultima Aventura: </div>
                            <div class=main-cnt-image><a href=${artigo.url}><img src="${artigo.img}"></a>
                            <div class=main-cnt-name> <a href=${artigo.url}> ${artigo.titulo} </div> </a> </div>
                            `;
}

/* inicia as funções quando a pagina termina de carregar */
document.addEventListener("DOMContentLoaded", pullJson);
// js usado para mostrar randomicamente os videos sugeridos pela comunidade
//função que vai puxar o JSON com a lista de videos recomendados
async function pullVidList() {
    try{
        const response = await fetch(`https://gabisystem.github.io/FilhosDeAndarilhoDK/data/videos.json?nocache=${Date.now()}`);
        const data = await response.json();
        const videos = data.videos;
        selectShow(videos);
    }   catch(error){ console.log(error)}
}
//função que randomiza a lista e mostra 3 videos recomendados
function selectShow(videosarray){
    const copia = [...videosarray];
    for(let i = copia.length - 1; i > 0; i--){
        const y = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[y]] = [copia[y], copia[i]];
    }
    const selecionados = copia.slice(0, 3);
    const container = document.getElementById("recVid");
    container.innerHTML += `<div class="rec-vid-txt"> Videos Recomendados: </div>`
    selecionados.forEach( video => 
        container.innerHTML += `<div class="rec-vid">
                                    <a href="${video.url}" target="_blank">
                                    <img class="rec-vid-img" src="https://img.youtube.com/vi/${video.id}/mqdefault.jpg" alt="${video.titulo} do Canal ${video.canal}">
                                    <div class="rec-vid-titulo"> ${video.titulo} </div>
                                    </a>
                                </div> `
    )
}
//inicia as funções quando o html termina de carregar
document.addEventListener('DOMContentLoaded', pullVidList)
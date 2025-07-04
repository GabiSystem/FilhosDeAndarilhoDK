//funão que vai carregar json com todas informações do perfil
async function loadProfileList() {
    try{
        const response = await fetch(`https://gabisystem.github.io/FilhosDeAndarilhoDK/data/members.json?nocache=${Date.now()}`);
        const data = await response.json();
        return(data);
    } catch(error){ console.error ('Erro, não foi possivel baixar o JSON'); return(null)}
}
//função que puxa info da url
function urlReader(){
    const parameters = new URLSearchParams(window.location.search);
    const urlData = parameters.get('profile');
    if(urlData == null){
        console.log('erro ao detectar perfil');
        return(null);
    } else{ return(urlData); }
}
//função que busca o usuario
function findProfile(dados, profile){
    const categorias = ['founders', 'members', 'exMembers'];
    for( const categoria of categorias){
        if(dados[categoria] && dados[categoria][profile]){
            return dados[categoria][profile];
        }
    }
    return(null);
}
//função para tratar dados json
async function workData(){
    const dados = await loadProfileList();
    if(dados === null){
        alert('Não foi possivel acessar os dados necessarios');
        window.location.replace('membros.html');
    }
    const urlData = urlReader();
    if(urlData === null){
        //aqui não tem alerta pois a pessoa entrou em uma url falsa e foi redirecionado
        window.location.replace('membros.html');
    }
    const userData = findProfile(dados, urlData);
    if(userData === null){
        alert('Não foi possivel encontrar página do usuario');
        window.location.replace('membros.html');
    }
    htmlWriter(userData);
}
//função para construir o html das redes sociais
function redeContructor(discord, btag, youtube, youtag, insta){
    let resultReturn = '';
     if (discord && discord.trim() !== ''){
        const tag = discord;
        resultReturn += `<a>
                            <div class="icon">
                                <img src="../assets/img/icons/disc.jpg">
                                <span>${tag}</span>
                            </div>
                        </a>`
    }
    if (btag && btag.trim() !== ''){
        const tag = btag;
        resultReturn += `<a>
                            <div class="icon">
                                <img src="../assets/img/icons/btag.jpg">
                                <span>${tag}</span>
                            </div>
                        </a>`
    }
    if (youtube && youtube.trim() !== ''){
        const link = youtube;
        const name = youtag;
        resultReturn += `<a href="${link}">
                                    <div class="icon">
                                        <img src="../assets/img/icons/ytb.jpg">
                                        <spam>${name}</spam>
                                    </div>`
    }
    if (insta && insta.trim() !== ''){
        const arroba = insta;
        resultReturn += `<a href="https://www.instagram.com/${arroba}}/">
                                    <div class="icon">
                                        <img src="../assets/img/icons/insta.jpg">
                                        <spam>@${arroba}</spam>
                                    </div>`
    }
    return(resultReturn);
}
function titleConstructor(title){
    let container = '';
    if(title && title.trim() !==''){
        container += `${title}`
        return(container)
    } else { return(container)}
}
//função que vai escrever o html de acordo com os dados do perfil
function htmlWriter(userData){
    const user = userData;
    const container = document.getElementById('perfilContainer');
    const redes = redeContructor(user.discord, user.btag, user.youtube, user.youtag, user.insta);
    const title = titleConstructor(user.title);
    container.innerHTML ='';
    container.innerHTML += `<div class="profile-body">
                                <div class="dados-container">
                                    <div class="profile-photo">
                                        <img src="${user.img}" width=300px>
                                    </div>
                                    <div class="profile-data">
                                        <div class="profile-name">
                                            ${user.nome}
                                        </div>
                                        <hr>
                                        <div class="profile-char-title">
                                           ${title}
                                        </div>
                                    </div>
                                </div>
                                <div class="content-flexbox">
                                    <div class="flex-left">
                                        <div class"bio-container">
                                            lore / bio${user.lore}
                                        </div>
                                        <div class="redes-container">
                                            redes sociais${redes}
                                        </div>
                                    </div>
                                    <div class="flex-right">
                                        <div class="articles-flex">
                                        <div>
                                    </div>
                                </div>
                            </div>`
}
//inicia a função assim que o site carrega
document.addEventListener("DOMContentLoaded", workData)
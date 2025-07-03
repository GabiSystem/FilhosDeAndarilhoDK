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

function redeContructor(btag, youtube, insta){
    let resultReturn = '';
    if (btag && btag.trim() !== ''){
        const link = btag;
        resultReturn += `<a href="${link}">
                                    <div class="icon">
                                        <img src="../assets/img/icons/btag.jpg">
                                    </div>`
    }
    if (youtube && youtube.trim() !== ''){
        const link = youtube;
        resultReturn += `<a href="${link}">
                                    <div class="icon">
                                        <img src="../assets/img/icons/ytb.jpg">
                                    </div>`
    }
    if (insta && insta.trim() !== ''){
        const link = insta;
        resultReturn += `<a href="${link}">
                                    <div class="icon">
                                        <img src="../assets/img/icons/insta.jpg">
                                    </div>`
    }
    return(resultReturn);
}
//função que vai escrever o html de acordo com os dados do perfil
function htmlWriter(userData){
    const user = userData;
    const container = document.getElementById('perfilContainer');
    const redes = redeContructor(user.btag, user.youtube, user.insta);
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
                                        <div class="profile-redes">
                                            ${redes}
                                        </div>
                                    </div>
                                </div>
                                
                            </div>`
    
}

//inicia a função assim que o site carrega
document.addEventListener("DOMContentLoaded", workData)
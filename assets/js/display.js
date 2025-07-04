//carrega o Json com os Membros
async function loadMembers() {
        try{
            const response = await fetch(`https://gabisystem.github.io/FilhosDeAndarilhoDK/data/members.json?nocache=${Date.now()}`);
            const data = await response.json();
            writeMembers(data.founders, 'dispFounders');
            writeMembers(data.members, 'dispMembers');
            writeMembers(data.exMembers, 'dispEx');
        } catch(error){ console.error("nao foi possivel carregar o JSON, ERROR: ", error); };
}
// função que vai escrever o html geral
function writeMembers(memberData, containerId){
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    for(const [key, member] of Object.entries(memberData)){
        container.innerHTML += `<div id="${member.id}-${key}" class="member-portrait">
                                    <a href="perfil.html?profile=${key}">
                                        <img src="${member.img}"> <br>
                                        <div> ${member.nome} </div>
                                    </a>
                                </div>`
    }
}
// ativa o script após a página carregar
document.addEventListener("DOMContentLoaded", loadMembers)
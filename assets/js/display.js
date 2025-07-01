//carrega o Json com os Membros
async function loadMembers() {
        try{
            const response = await fetch(`https://gabisystem.github.io/FilhosDeAndarilhoDK/data/members.json?nocache=${Date.now()}`);
            const data = await response.json();
            writeFounder(data.founders);
            writeMembers(data.members);
            writeExMembers(data.exMembers);

        } catch(error){ console.error("nao foi possivel carregar o JSON, ERROR: ", error); };
}

//função para os fundadores
function writeFounder(foundersData){
    const founders = [...foundersData];
    const container = document.getElementById('dispFounders');
    founders.forEach( founders =>
        container.innerHTML += `<div id=${founders.id} class="member-portrait">
                                    <a href="${founders.url}">
                                        <img src="${founders.img}"> <br>
                                        <div> ${founders.nome} </div>
                                    </a>
                                </div>`
    );
}
//função para os membros
function writeMembers(membersData){
    const members = [...membersData];
    const container = document.getElementById('dispMembers');
    members.forEach( members =>
        container.innerHTML += `<div id=${members.id} class="member-portrait">
                                    <a href="${members.url}">
                                        <img src="${members.img}"> <br>
                                        <div> ${members.nome} </div>
                                    </a>
                                </div>`
    );

}

//função para os exmembros memoraveis
function writeExMembers(exMembersData){
    const exMembers = [...exMembersData];
    const container = document.getElementById('dispEx');
    exMembers.forEach( exMembers =>
        container.innerHTML += `<div id=${exMembers.id} class="member-portrait">
                                    <a href="${exMembers.url}">
                                        <img src="${exMembers.img}"> <br>
                                        <div> ${exMembers.nome} </div>
                                    </a>
                                </div>`
    );
}

// ativa o script após a página carregar
document.addEventListener("DOMContentLoaded", loadMembers)
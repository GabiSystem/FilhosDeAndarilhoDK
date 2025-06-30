//js usado para funcionalidade do menu superior

document.addEventListener('DOMContentLoaded', () => {
    const sanduicheBtn = document.getElementById('sanduicheMobile');
    sanduicheBtn.classList.add('sanduiche-style');

    sanduicheBtn.addEventListener('click', abrirFechar);
});

function abrirFechar() {
    const botao = document.getElementById('sanduicheMobile');
    const menu = document.getElementById('mainNav');
    const subMenu = document.getElementById('subMenu');

    botao.classList.toggle('aberto');
    menu.classList.toggle('aberto');
    subMenu.classList.toggle('aberto');
    
}
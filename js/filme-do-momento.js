const btnMenu = document.getElementById('btn-menu');
const btnFechar = document.getElementById('btn-fechar');
const menuLateral = document.getElementById('menu-lateral');

btnMenu.addEventListener('click', () => {
    menuLateral.classList.add('ativo');
});

btnFechar.addEventListener('click', () => {
    menuLateral.classList.remove('ativo');
});

document.querySelectorAll('#menu-lateral a').forEach(link => {
    link.addEventListener('click', () => {
        menuLateral.classList.remove('ativo');
    });
});

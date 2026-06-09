const btnMenu = document.getElementById('btn-menu');
const btnFechar = document.getElementById('btn-fechar');
const menuLateral = document.getElementById('menu-lateral');
const overlay = document.getElementById('overlay');

if (btnMenu && btnFechar && menuLateral) {
    btnMenu.addEventListener('click', () => {
        menuLateral.classList.add('ativo');
        if (overlay) overlay.classList.add('ativo');
    });

    btnFechar.addEventListener('click', fechar);
    if (overlay) overlay.addEventListener('click', fechar);

    document.querySelectorAll('#menu-lateral a').forEach(link => {
        link.addEventListener('click', () => {
            fechar();
        });
    });

    function fechar() {
        menuLateral.classList.remove('ativo');
        if (overlay) overlay.classList.remove('ativo');
    }
}

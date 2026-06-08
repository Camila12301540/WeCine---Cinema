const btnMenu = document.getElementById('btn-menu');
const btnFechar = document.getElementById('btn-fechar');
const menuLateral = document.getElementById('menu-lateral');

if (btnMenu && btnFechar && menuLateral) {
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

    document.addEventListener('click', function(e) {
        if (menuLateral.classList.contains('ativo')) {
            if (!menuLateral.contains(e.target) && !btnMenu.contains(e.target)) {
                menuLateral.classList.remove('ativo');
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const iframeMapa = document.getElementById("mapa-cinema");
    const botoesCinema = document.querySelectorAll(".btn-cinema");

    botoesCinema.forEach(botao => {
        botao.addEventListener("click", function() {
            const novoMapaUrl = this.getAttribute("data-map");
            
            if (novoMapaUrl) {
                iframeMapa.src = novoMapaUrl;
            }
        });
    });
});
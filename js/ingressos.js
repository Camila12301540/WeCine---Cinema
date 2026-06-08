const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    let preco = Number(document.getElementById("filme").value);

    let quantidade = Number(document.getElementById("quantidade").value);

    let tipo = document.getElementById("tipo").value;

    let total = preco * quantidade;

    if (tipo == "meia") {
        total = total / 2;
    }

    document.getElementById("resultado").innerText =
        "Total: R$ " + total.toFixed(2);

});

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
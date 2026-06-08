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

const selectContainer = document.querySelector('.custom-select-container');
if (selectContainer) {
    const trigger = selectContainer.querySelector('.select-trigger');
    const hiddenInput = document.getElementById('genero-selecionado');
    const options = selectContainer.querySelectorAll('.option');

    if (trigger) {
        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            selectContainer.classList.toggle('open');
        });
    }

    options.forEach(option => {
        option.addEventListener('click', (e) => {
            if (trigger) trigger.textContent = option.textContent;
            if (hiddenInput) hiddenInput.value = option.getAttribute('data-value');
            selectContainer.classList.remove('open');
        });
    });

    document.addEventListener('click', function(e) {
        if (!selectContainer.contains(e.target)) {
            selectContainer.classList.remove('open');
        }
    });
}

const formCadastro = document.querySelector('#card-1-content');
const formInteresses = document.querySelector('#card-2-content');

if (formCadastro) {
    formCadastro.addEventListener('submit', () => {
        const nome = document.getElementById('nome')?.value || '';
        const email = document.getElementById('email')?.value || '';
        const celular = document.getElementById('celular')?.value || '';
        const senha = document.getElementById('senha')?.value || '';
        console.log('Enviando Cadastro:', { nome, email, celular, senha });
    });
}

if (formInteresses) {
    formInteresses.addEventListener('submit', () => {
        const genero = document.getElementById('genero-selecionado')?.value || '';
        const filme = document.getElementById('filme')?.value || '';
        const ator = document.getElementById('ator')?.value || '';
        console.log('Enviando Interesses:', { genero, filme, ator });
    });
}

window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has('nome')) {
        alert('Cadastro realizado com sucesso!');
    } else if (urlParams.has('genero') || urlParams.has('filme')) {
        alert('Interesses enviados com sucesso!');
    }
});

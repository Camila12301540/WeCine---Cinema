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
    formCadastro.addEventListener('submit', function(e) {
        e.preventDefault();
        const nome = document.getElementById('nome')?.value || '';
        const email = document.getElementById('email')?.value || '';
        const celular = document.getElementById('celular')?.value || '';
        const senha = document.getElementById('senha')?.value || '';
        
        const params = new URLSearchParams({ nome, email, celular, senha, tipoForm: 'cadastro' });
        window.location.search = params.toString();
    });
}

if (formInteresses) {
    formInteresses.addEventListener('submit', function(e) {
        const hiddenInput = document.getElementById('genero-selecionado');
        if (hiddenInput && !hiddenInput.value) {
            e.preventDefault();
            alert('Por favor, selecione um gênero favorito!');
            return;
        }
        
        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.set('tipoForm', 'interesses');
    });
}

window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const tipoForm = urlParams.get('tipoForm');

    if (tipoForm === 'cadastro' || urlParams.has('nome')) {
        alert('Cadastro realizado com sucesso!');
    } else if (tipoForm === 'interesses' || urlParams.has('genero')) {
        alert('Interesses enviados com sucesso!');
    }
});

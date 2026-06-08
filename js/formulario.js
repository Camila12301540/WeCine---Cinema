const formCadastro = document.querySelector('#card-1-content');
const formInteresses = document.querySelector('#card-2-content');

if (formCadastro){
    formCadastro.addEventListener('submit', (e) => {
        const nome = document.getElementById('nome')?.value || '';
        const email = document.getElementById('email')?.value || '';
        const celular = document.getElementById('celular')?.value || '';
        const senha = document.getElementById('senha')?.value || '';
        
        console.log('Cadastro enviado:', { nome, email, celular, senha });
        alert('Cadastro realizado com sucesso! Atualizando URL...');
    });
}

if (formInteresses) {
    formInteresses.addEventListener('submit', (e) => {
        const genero = document.getElementById('genero-selecionado')?.value || '';
        const filme = document.getElementById('filme')?.value || '';
        const ator = document.getElementById('ator')?.value || '';
        
        console.log('Interesses enviados:', { genero, filme, ator });
        alert('Interesses enviados com sucesso! Atualizando URL...');
    });
}

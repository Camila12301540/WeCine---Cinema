const links = document.querySelectorAll('#menu-grade a');
const gradeImg = document.getElementById('grade');
const descricaoGenero = document.getElementById('descricao-genero');
const filmesRecomendados1 = document.getElementById('filmes-recomendados1');
const filmesRecomendados2 = document.getElementById('filmes-recomendados2');
const filmesRecomendados3 = document.getElementById('filmes-recomendados3');

const generoData = {
    'acao': {
        imagem: '../images/gradeGeneroAcao.png',
        descricao: 'Filmes que priorizam movimento, perigo e energia. A narrativa é conduzida por cenas físicas intensas (lutas, perseguições, explosões), com ritmo rápido. O objetivo principal é gerar emoção e adrenalina no espectador.'
    },
    'animacao': {
        imagem: '../images/gradeGeneroAnimacao.png',
        descricao: 'Filmes criados a partir de images construídas quadro a quadro (desenho, stop motion ou computação gráfica). Diferente do cinema tradicional, o movimento não é capturado do mundo real, mas produzido artificialmente.'
    },
    'comedia': {
        imagem: '../images/gradeGeneroComedia.png',
        descricao: 'Gênero focado em provocar riso. Usa humor físico, diálogos engraçados, exageros ou críticas sociais (sátira). A leveza e o entretenimento são centrais.'
    },
    'drama': {
        imagem: '../images/gradeGeneroDrama.png',
        descricao: 'Explora conflitos humanos profundos, como dilemas morais, familiares ou sociais. Tem tom mais sério e busca envolver emocionalmente o público com personagens realistas.'
    },
    'romance': {
        imagem: '../images/gradeGeneroRomance.png',
        descricao: 'Foca em relações amorosas. A história gira em torno do desenvolvimento do relacionamento, incluindo obstáculos emocionais, sociais ou pessoais.'
    },
    'terror': {
        imagem: '../images/gradeGeneroTerror.png',
        descricao: 'Tem como objetivo causar medo, tensão ou desconforto. Pode usar elementos sobrenaturais (fantasmas, monstros) ou psicológicos (medos internos, suspense).'
    }
};

const filmesRecomendadosData1 = {
    'acao': {
        imagem: '../images/ticket1a.png',
        descricao: 'Após o surgimento do Batman (Christian Bale), Gotham City ainda sofre com o crime organizado. Com a ajuda do tenente James Gordon (Gary Oldman) e do promotor público Harvey Dent (Aaron Eckhart), Batman luta para restaurar a ordem e combater a máfia que controla parte da polícia e da cidade.'
    },
    'animacao': {
        imagem: '../images/ticket2a.png',
        descricao: 'Simba, um leão herdeiro do trono, precisará enfrentar seu tio Scar e escapar de suas artimanhas para evitar perder seu posto como futuro rei.'
    },
    'comedia': {
        imagem: '../images/ticket3a.png',
        descricao: 'Quarenta anos da história dos Estados Unidos, vistos pelos olhos de Forrest Gump (Tom Hanks), um rapaz com QI abaixo da média e boas intenções. Por obra do acaso, ele consegue participar de momentos cruciais, como a Guerra do Vietnã e Watergate, mas continua pensando no seu amor de infância, Jenny Curran.'
    },
    'drama': {
        imagem: '../images/ticket4a.png',
        descricao: 'A história acompanha a poderosa família mafiosa Corleone, liderada por Vito Corleone. Quando seus negócios são ameaçados, seu filho Michael, inicialmente distante do crime, acaba sendo envolvido e se transformando em um dos maiores líderes da máfia.'
    },
    'romance': {
        imagem: '../images/ticket5a.png',
        descricao: 'Jack e Rose, de classes sociais diferentes, se apaixonam a bordo do luxuoso navio Titanic. Quando o navio colide com um iceberg, o romance é colocado à prova em meio a uma tragédia.'
    },
    'terror': {
        imagem: '../images/ticket6a.png',
        descricao: 'Uma secretária, fugindo após um roubo, se hospeda em um velho hotel de beira de estrada. Lá, ela passará por grandes perigos quando o administrador do hotel revelar suas obscuras intenções.'
    }
};

const filmesRecomendadosData2 = {
    'acao': {
        imagem: '../images/ticket1b.png',
        descricao: 'Os Vingadores unem forças para lutar contra Thanos, após o vilão eliminar metade dos seres vivos da galáxia.'
    },
    'animacao': {
        imagem: '../images/ticket2b.png',
        descricao: 'Um menino de 12 anos, na tentativa de ser um músico famoso, enfrenta a desaprovação de sua família, acabando por se envolver em um mistério de 100 anos.'
    },
    'comedia': {
        imagem: '../images/ticket3b.png',
        descricao: 'As aventuras dos nordestinos João Grilo (Matheus Natchergaele), um sertanejo pobre e mentiroso, e Chicó (Selton Mello), o mais covarde dos homens.'
    },
    'drama': {
        imagem: '../images/ticket4b.png',
        descricao: 'Durante a Holocausto, o empresário alemão Oskar Schindler usa sua fábrica para empregar e proteger judeus da perseguição nazista. Aos poucos, ele arrisca tudo para salvar o maior número possível de vidas.'
    },
    'romance': {
        imagem: '../images/ticket5b.png',
        descricao: 'Noah e Allie vivem um amor intenso, mas enfrentam diferenças sociais e o tempo. Anos depois, a história dos dois é relembrada, mostrando a força de um amor que resiste às dificuldades e ao passar da vida.'
    },
    'terror': {
        imagem: '../images/ticket6b.png',
        descricao: 'Em Georgetown, Washington, uma atriz vai gradativamente tomando consciência que a sua filha de doze anos está tendo um comportamento completamente assustador.'
    }
};

const filmesRecomendadosData3 = {
    'acao': {
        imagem: '../images/ticket1c.png',
        descricao: 'Thanos está cada vez mais perto de conseguir as Joias do Infinito, e os Vingadores precisam derrotá-lo antes que o titã destruia a galáxia.'
    },
    'animacao': {
        imagem: '../images/ticket2c.png',
        descricao: 'Woody, o brinquedo favorito de Andy, fica com ciúmes quando Buzz Lightyear chega. Após se perderem, os dois precisam se unir para voltar para casa e acabam aprendendo sobre amizade.'
    },
    'comedia': {
        imagem: '../images/ticket3c.png',
        descricao: 'Marty McFly viaja acidentalmente para 1955 em uma máquina do tempo criada por Doc Brown. Ao interferir no encontro de seus pais, ele precisa consertar o passado para garantir sua própria existência e conseguir voltar ao presente.'
    },
    'drama': {
        imagem: '../images/ticket4c.png',
        descricao: 'Andy Dufresne é condenado injustamente à prisão perpétua. Na cadeia, ele cria uma forte amizade com Red e mantém a esperança viva, encontrando maneiras de enfrentar a rotina e planejar sua liberdade.'
    },
    'romance': {
        imagem: '../images/ticket5c.png',
        descricao: 'Durante uma viagem de trem pela Europa, Jesse, um jovem americano, conhece Celine, uma estudante francesa. Impulsionados por uma conexão imediata, eles decidem descer em Viena e passar a noite explorando a cidade juntos antes que ele retorne aos Estados Unidos na manhã seguinte.'
    },
    'terror': {
        imagem: '../images/ticket6c.png',
        descricao: 'Jack Torrance aceita trabalhar como zelador de um hotel isolado durante o inverno. Com o tempo, ele começa a perder a sanidade, enquanto seu filho Danny, que possui poderes psíquicos, percebe a presença de forças sobrenaturais no local.'
    }
};

function atualizarGenero(genero) {
    if (generoData[genero]) {
        const dados = generoData[genero];
        gradeImg.src = `../images/${dados.imagem}`;
        descricaoGenero.textContent = dados.descricao;
    }
    atualizarFilmesRecomendados1(genero);
    atualizarFilmesRecomendados2(genero);
    atualizarFilmesRecomendados3(genero);
}

function atualizarFilmesRecomendados1(genero) {
    const filmesDiv = filmesRecomendados1.querySelector('div');
    
    if (filmesRecomendadosData1[genero]) {
        const filme = filmesRecomendadosData1[genero];
        filmesDiv.innerHTML = `
            <div class="filme-card">
                <img src="../images/${filme.imagem}" alt="Filme recomendado">
                <p class="filme-descricao">${filme.descricao}</p>
            </div>
        `;
    } else {
        filmesDiv.innerHTML = '';
    }
}

function atualizarFilmesRecomendados2(genero) {
    const filmesDiv = filmesRecomendados2.querySelector('div');

    if (filmesRecomendadosData2[genero]) {
        const filme = filmesRecomendadosData2[genero];
        filmesDiv.innerHTML = `
            <div class="filme-card">
                <img src="../images/${filme.imagem}" alt="Filme recomendado">
                <p class="filme-descricao" id="prata">${filme.descricao}</p>
            </div>
        `;
    } else {
        filmesDiv.innerHTML = '';
    }
}

function atualizarFilmesRecomendados3(genero) {
    const filmesDiv = filmesRecomendados3.querySelector('div');

    if (filmesRecomendadosData3[genero]) {
        const filme = filmesRecomendadosData3[genero];
        filmesDiv.innerHTML = `
            <div class="filme-card">
                <img src="../images/${filme.imagem}" alt="Filme recomendado">
                <p class="filme-descricao" id="prata">${filme.descricao}</p>
            </div>
        `;
    } else {
        filmesDiv.innerHTML = '';
    }
}

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        links.forEach(l => l.classList.remove('ativo'));
        this.classList.add('ativo');
        
        const genero = Array.from(this.classList).find(cls => Object.keys(generoData).includes(cls));
        if (genero) {
            atualizarGenero(genero);
        }
    });
});

const generoAtivo = Array.from(document.querySelector('#menu-grade a.ativo').classList).find(cls => Object.keys(generoData).includes(cls));
if (generoAtivo) {
    atualizarGenero(generoAtivo);
}

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

document.addEventListener("DOMContentLoaded", function () {
    const botoes = document.querySelectorAll(".genero-btn");
    const imagemGrade = document.getElementById("grade");

    botoes.forEach(botao => {
        botao.addEventListener("click", function (e) {
            e.preventDefault();

            botoes.forEach(b => b.classList.remove("ativo"));
            
            this.classList.add("ativo");

            const novaImagem = this.getAttribute("data-genero");

            imagemGrade.src = `../images/${novaImagem}`;
        });
    });
});
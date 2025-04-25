const filmes = [
    { titulo: 'Cidade de Deus', genero: 'acao' , descricao: 'Um filme sobre a vida em uma comunidade do Rio de Janeiro.', imagem: 'cidadededeus.jpg' },
    { titulo: 'Tropa de Elite', genero: 'acao' , descricao: 'Policiais militares enfrentando as gangues do Rio de Janeiro.', imagem: 'tropadeelite.jpg' },
    { titulo: 'Alemão', genero: 'acao' , descricao: 'Durante uma operação policial no Rio de Janeiro, vários policiais são feitos reféns.', imagem: 'alemao.jpg' },
    { titulo: 'Traição', genero: 'acao' , descricao: 'Uma história de um traidor no mundo do crime organizado.', imagem: 'traicao.webp' },
    { titulo: 'Carga Maxima', genero: 'acao' , descricao: 'Roger, um piloto de Fórmula Truck que se envolve com uma quadrilha de ladrões.', imagem: 'cargamaxima.jpg' },
    { titulo: 'O Doutrinador', genero: 'acao' , descricao: 'História de um agente federal que se torna um vigilante mascarado.', imagem: 'doutrinador.webp' },
    { titulo: 'Operações Especiais', genero: 'acao' , descricao: 'Uma cidade do interior do Rio de Janeiro que sofre com o aumento da criminalidade.', imagem: 'operacoesespeciais.jpg' },
    { titulo: 'O Matador', genero: 'acao' , descricao: 'Cabeleira, um temido assassino de Pernambuco.', imagem: 'omatador.jpg' },
    { titulo: 'Intervenção: é Proibido Morrer', genero: 'acao' , descricao: 'Larissa e Douglas são policiais que trabalham em uma Unidade de Polícia Pacificadora.', imagem: 'intervencao.jpg' },
    { titulo: 'O Auto da Compadecida', genero: 'comedia' , descricao: 'A dupla luta para sobreviver aplicando golpes no pequeno vilarejo de Taperoá.', imagem: 'auto.jpg' },
    { titulo: 'Os Farofeiros', genero: 'comedia' , descricao: ' Colegas de trabalho se programam para curtir o feriado prolongado em uma casa de praia.', imagem: 'osfarofeiros.jpg' },
    { titulo: 'Minha Mãe É Uma Peça', genero: 'comedia' , descricao: 'Hiperativa, ela não larga do pé de seus filhos, Marcelina e Juliano.', imagem: 'mae.avif' },
    { titulo: 'O Palhaço', genero: 'comedia' , descricao: 'Benjamim e seu pai, Valdemar, formam a divertida dupla de palhaços Pangaré e Puro Sangue..', imagem: 'opalhaco.jpg' },
    { titulo: 'Bingo: O Rei das Manhãs', genero: 'comedia' , descricao: 'Augusto sempre sonhou com o estrelato e finalmente tem sua chance ao se tornar Bingo.', imagem: 'bingo.webp' },
    { titulo: 'O Homem do Futuro', genero: 'comedia' , descricao: 'Zero é um cientista ridicularizado cuja última invenção o levou ao passado.', imagem: 'homem.jpg' },
    { titulo: 'Cabras da Peste', genero: 'comedia' , descricao: 'Bruceuilis, um policial do interior do Ceará, viaja até São Paulo para resgatar Celestina, uma cabra considerada patrimônio de sua cidade. Na capital paulista, ele encontra Trindade, um escrivão da polícia .', imagem: 'cabras.webp' },
    { titulo: 'Minha Vida em Marte', genero: 'comedia' , descricao: 'Acompanha Fernanda, casada com Tom e com uma filha, que enfrenta a crise do casamento.', imagem: 'minha.jpg' },
    { titulo: 'Um Suburbano Sortudo', genero: 'comedia' , descricao: 'Sua vida muda quando ele descobre que sua mãe teve um tórrido caso com um ricaço.', imagem: 'sub.jpg' },
    { titulo: 'Central do Brasil', genero: 'drama' , descricao: 'Uma amargurada ex-professora, ganha a vida escrevendo cartas para pessoas analfabetas.', imagem: 'central.jpg' },
    { titulo: 'Carandiru: O Filme', genero: 'drama' , descricao: 'Médico sanitarista se oferece para realizar o trabalho de prevenção ao vírus HIV no Carandiru, maior presídio da América Latina, durante a década de 1990.', imagem: 'carandiru.jpg' },
    { titulo: 'Ainda Estou Aqui', genero: 'drama' , descricao: 'Um dia, Rubens Paiva é levado por militares à paisana e desaparece.', imagem: 'ainda.jpg' },
    { titulo: 'Casa Grande', genero: 'drama' , descricao: 'Sônia e Hugo são da alta burguesia carioca e levam uma vida bastante confortável. Aos poucos vão à falência, mas ninguém sabe de seus problemas financeiros, nem mesmo o filho Jean, que faz de tudo para se desvencilhar dos pais superprotetores. Para se manter, o casal corta despesas e ele, que só se preocupava com garotas e vestibular, enfrenta pela primeira vez a realidade..', imagem: 'casa.jpg' },
    { titulo: 'Nosso Lar', genero: 'drama' , descricao: 'Baseado em livro de Chico Xavier, a jornada espiritual conta a história de um médico.', imagem: 'nosso.jpg' },
    { titulo: 'Ricos de Amor', genero: 'romance' , descricao: 'Teto é filho de Teodoro, um empresário rico que é conhecido como "O Rei do Tomate". O rapaz, que em breve herdará a fábrica do pai, se apaixona por Paula.', imagem: 'ricos.jpg' },
    { titulo: 'Amor sem Medida', genero: 'romance' , descricao: 'Ivana é uma bela advogada que se apaixona por Ricardo, um divertido cardiologista.', imagem: 'amor.jpg' },
    { titulo: 'Xingu', genero: 'aventura' , descricao: 'A história dos irmãos Villas-Bôas em sua jornada de desbravamento do Brasil, Eles entram em contato com aldeias indígenas, ajudando a defender a sua cultura e criando o Parque Nacional do Xingu. .', imagem: 'xingu.jpg' },
    { titulo: 'Os Aventureiros - A Origem', genero: 'aventura' , descricao: 'Luccas Neto, sua irmã Gi e seus amigos não faziam ideia do que estava por vir. Quando Luccas decide invadir o laboratório do cientista Honório Flacksman, o grupo é sugado para um portal que os leva para outra dimensão, a Cidade da Alegria.', imagem: 'aventura.jpg' },
    { titulo: 'O Lobo Atrás da Porta', genero: 'suspense' , descricao: 'Uma criança é sequestrada e seus pais, Bernardo e Sylvia, decidem ir até a delegacia..', imagem: 'lobo.jpg' },
    { titulo: 'Última Parada 174', genero: 'suspense' , descricao: 'Sobrevivente da chacina da Candelária, sequestra um ônibus no Rio de Janeiro.', imagem: '174.jpg' },
    { titulo: 'Maníaco do Parque', genero: 'suspense' , descricao: 'Um violento assassino: o Maníaco do Parque.', imagem: 'maniaco.jpg' },
    { titulo: 'Ângela', genero: 'suspense' , descricao: 'A famosa socialite Ângela Diniz conhece Raul e acredita ter encontrado alguém que ama seu espírito livre tanto quanto ela.', imagem: 'angela.webp' },
    { titulo: 'Cidade de Deus - 10 Anos Depois', genero: 'documentario' , descricao: 'O título resgata os 10 anos passados desde o lançamento de Cidade de Deus.', imagem: 'deus.jpg' },
    { titulo: 'Getúlio', genero: 'documentario' , descricao: 'Getúlio Vargas passa seus 16 últimos dias pressionado por uma crise política.', imagem: 'getulio.webp' },
    { titulo: 'Chorão: Marginal Alado', genero: 'documentario' , descricao: 'O documentário retrata a vida e a carreira do cantor brasileiro Chorão, líder da banda Charlie Brown Jr.', imagem: 'chorao.webp' },
    { titulo: 'Carrossel: O Filme', genero: 'infantil' , descricao: ' Os alunos viajam ao acampamento Panapaná, pertencente ao avô da Alícia.', imagem: 'carrosel.jpg' },
    { titulo: 'Turma da Mônica: Laços', genero: 'fantasia' , descricao: 'O Floquinho desaparece. Para encontrar seu cachorro de estimação, Cebolinha conta com os seus amigos.', imagem: 'monica.jpg' },
   
  ];
  
  const filmesSection = document.getElementById('filmes');
  const favoritosSection = document.getElementById('listaFavoritos');
  const searchInput = document.getElementById('searchInput');
  
  let favoritos = [];
  
  function mostrarFilmes(filtrarGenero = null) {
    filmesSection.innerHTML = '';
    const lista = filmes.filter(f => !filtrarGenero || f.genero === filtrarGenero);
    lista.forEach(filme => {
      const card = document.createElement('div');
      card.className = 'col-md-4';
      card.innerHTML = `
        <div class="card p-3">
          <h5 class="card-title">${filme.titulo}</h5>
          <p class="card-text">Gênero: ${filme.genero}</p>
          <button class="btn btn-favorito" onclick='adicionarFavorito("${filme.titulo}")'>💛 Favoritar</button>
        </div>
      `;
      filmesSection.appendChild(card);
    });
  }
  
  function adicionarFavorito(titulo) {
    if (!favoritos.includes(titulo)) {
      favoritos.push(titulo);
      atualizarFavoritos();
    }
  }
  
  function atualizarFavoritos() {
    favoritosSection.innerHTML = '';
    favoritos.forEach(titulo => {
      const card = document.createElement('div');
      card.className = 'col-md-4';
      card.innerHTML = `
        <div class="card p-3">
          <h5 class="card-title">${titulo}</h5>
          <button class="btn btn-danger" onclick='removerFavorito("${titulo}")'>❌ Remover</button>
        </div>
      `;
      favoritosSection.appendChild(card);
    });
  }
  
  function pesquisarFilmes(texto) {
    const resultado = filmes.filter(filme => filme.titulo.toLowerCase().includes(texto.toLowerCase()));
    filmesSection.innerHTML = '';
    resultado.forEach(filme => {
      const card = document.createElement('div');
      card.className = 'col-md-4';
      card.innerHTML = `
        <div class="card p-3">
          <h5 class="card-title">${filme.titulo}</h5>
          <p class="card-text">Gênero: ${filme.genero}</p>
          <button class="btn btn-favorito" onclick='adicionarFavorito("${filme.titulo}")'>💛 Favoritar</button>
        </div>
      `;
      filmesSection.appendChild(card);
    });
  }
  
  function removerFavorito(titulo) {
    favoritos = favoritos.filter(f => f !== titulo);
    atualizarFavoritos();
  }
  
  searchInput.addEventListener('input', () => {
    pesquisarFilmes(searchInput.value);
  });
  
  document.querySelectorAll('.dropdown-item').forEach(link => {
    link.addEventListener('click', e => {
      const genero = e.target.getAttribute('href').replace('#', '');
      mostrarFilmes(genero);
    });
  });
  
  mostrarFilmes();
  async function carregarFilmes() {
    const response = await fetch('filmes.json');
    const filmes = await response.json();
    return filmes;
  }
  card.innerHTML = `
  <div class="card p-3">
    <img src="${filme.imagem}" class="card-img-top" alt="${filme.titulo}">
    <div class="card-body">
      <h5 class="card-title">${filme.titulo}</h5>
      <p class="card-text">${filme.descricao}</p>
      <p class="card-text"><strong>Gênero:</strong> ${filme.genero}</p>
      <button class="btn btn-favorito" onclick='adicionarFavorito("${filme.titulo}")'>💛 Favoritar</button>
    </div>
  </div>
`;

async function carregarFilmes() {
    const response = await fetch('filmes.json');
    const filmesJSON = await response.json();
    mostrarFilmesComDados(filmesJSON);
  }
  
  function mostrarFilmes(filtrarGenero = null) {
    filmesSection.innerHTML = ''; 
    const lista = filmes.filter(f => !filtrarGenero || f.genero === filtrarGenero);
    lista.forEach(filme => {
      const card = document.createElement('div');
      card.className = 'col-md-4';
      card.innerHTML = `
        <div class="card p-3">
          <img src="${filme.imagem}" class="card-img-top" alt="${filme.titulo}">
          <div class="card-body">
            <h5 class="card-title">${filme.titulo}</h5>
            <p class="card-text">${filme.descricao}</p>
            <p class="card-text">Gênero: ${filme.genero}</p>
            <button class="btn btn-favorito" onclick='adicionarFavorito("${filme.titulo}")'>💛 Favoritar</button>
          </div>
        </div>
      `;
      filmesSection.appendChild(card);
    });
  }

  function pesquisarFilmes(texto) {
    const resultado = filmes.filter(filme =>
      filme.titulo.toLowerCase().includes(texto.toLowerCase())
    );
    filmesSection.innerHTML = '';
    resultado.forEach(filme => {
      const card = document.createElement('div');
      card.className = 'col-md-4';
      card.innerHTML = `
        <div class="card p-3">
          <img src="${filme.imagem}" class="card-img-top" alt="${filme.titulo}">
          <div class="card-body">
            <h5 class="card-title">${filme.titulo}</h5>
            <p class="card-text">${filme.descricao}</p>
            <p class="card-text"><strong>Gênero:</strong> ${filme.genero}</p>
            <button class="btn btn-favorito" onclick='adicionarFavorito("${filme.titulo}")'>💛 Favoritar</button>
          </div>
        </div>
      `;
      filmesSection.appendChild(card);
    });
  }
  
  
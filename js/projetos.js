
const projetos = [
  {
    id: "dev-burguer",
    nome: "Dev Burguer",
    descricao: "Aplicação Full Stack que simula uma lanchonete digital completa: login, cadastro, vitrine de produtos, carrinho, painel administrativo e pagamentos via Stripe.",
    imagens: [
      "img/Devburgerlogin.png",
      "img/DevBurguer.png",
      "img/Devburgercardapio.png",
      "img/DevburgerPagamaneto.png",
      "img/Devburgercarrinho.png",
      "img/Devburgercardapio2.png"
    ],
    tags: ["React", "Node.js", "Express", "Stripe", "JWT", "Full Stack"],
    linkProjeto: "#",
    linkCodigo: "https://github.com/caiomacedo10/devburger-interface.git",
    ano: "2025"
  },
  {
       id: "conversor-moedas",
       nome: "Conversor de Moedas",
       descricao: "Conversor de moedas em tempo real, integrado à API AwesomeAPI, que permite converter entre Real, Dólar, Euro, Libra e Bitcoin. Desenvolvido com HTML, CSS e JavaScript, o projeto utiliza fetch/async/await, formatação internacional com Intl.NumberFormat, manipulação dinâmica do DOM e design responsivo com foco em usabilidade.",
      imagens: [
      "img/ConversorDeMoedas.png",
      "img/ConvertMoney.png",
       
        
    ],
    tags: ["HTML", "CSS", "JavaScript", "API", "Fetch", "Async/Await"],
    linkProjeto: "#",
    linkCodigo: "https://github.com/caiomacedo10/My-currency-convert.git",
    ano: "2025"
  },{
    id: "dev-movies",
    nome: "Dev Movies",
     descricao: "Aplicação desenvolvida em React.js integrada à TMDb API, que permite explorar filmes e séries com detalhes completos, incluindo trailers, elenco e recomendações. Utiliza Axios, React Router DOM e Styled-Components para garantir navegação fluida, consumo dinâmico de dados e design moderno responsivo.",
    imagens: [
      "img/DevMoviesCapa.png",
      "img/DevmoviesArtistas.png",
      "img/DevmoviesCreditos.png",
      "img/DevmoviesSeriesPopulares.png",
      "img/DevSeries.png",
    
    ],
    tags: ["React", "API", "Axios", "React Router", "Styled-Components"],
    linkProjeto: "#",
    linkCodigo: "https://github.com/caiomacedo10/dev-movies.git",
    ano: "2025"
  },
  {
      id: "dev-bills",
    nome: "Dev Bills",
     descricao: "Plataforma completa de gerenciamento financeiro desenvolvida com React + TypeScript e Tailwind CSS no front-end, integrada a um backend em Node.js, Prisma, MongoDB e Fastify. Possui autenticação com Google, dashboard interativo com gráficos, controle de receitas e despesas, categorias personalizadas e interface moderna totalmente responsiva.",
    imagens: [
      "img/DevBillsCapa.png",
      "img/DevBillsTransactions1.png",
      "img/DevbilsHome.png",
      "img/DevbilsTransactions.png",
     
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Prisma", "MongoDB", "Fastify"],
    linkProjeto: "#",
    linkCodigo: "https://github.com/caiomacedo10/DEVBILLS-INTERFACE.git",
    ano: "2025"
  },
  {
   id: "cafeteria-caio",
    nome: "Cafeteria do Caio",
    descricao: "Website moderno e responsivo desenvolvido em HTML5, CSS3 e JavaScript, com navegação fluida, cardápio interativo e design elegante inspirado em cafeterias artesanais. Conta com layout responsivo, efeitos de animação, seção de contato e experiência visual envolvente para destacar o melhor café da cidade.",
    imagens: [
      "img/CafeteriaPorfolio.png",
      "img/CafeteriaPortfolio2.png",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "Web Development"],
    linkProjeto: "#",
    linkCodigo: "https://github.com/caiomacedo10/treinando.git",
    ano: "2025"
  },
  {
     id: "cadastro-usuarios",
    nome: "Cadastro de Usuários",
  descricao: "Aplicação full-stack desenvolvida com React no front-end e Node.js no back-end, permitindo cadastro e exclusão de usuários com exibição de avatares aleatórios via API. Interface moderna, fluida e responsiva, construída para oferecer uma experiência simples e eficiente.",
    imagens: [
      "img/CadastroDeUsuarios.png",
      "img/ListaDeUsuarios.png",
     
    ],
    tags: ["React", "Node.js", "Express", "API", "Full Stack"],
    linkProjeto: "#",
    linkCodigo: "https://github.com/caiomacedo10/cadastrando-usuarios.git",
    ano: "2025"
  },
];

window.projetos = projetos;

window.getProjetoById = function () {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  if (!id) return null;
  return projetos.find(p => p.id === id) || null;
};


window.initCarousel = function (carousel, imagens, indicators, options = {}) {
  carousel.innerHTML = '';
  indicators.innerHTML = '';

  const track = document.createElement('div');
  track.className = 'carousel-track';
  carousel.appendChild(track);

  if (!imagens || imagens.length === 0) {
    carousel.innerHTML = '<div style="padding:36px;text-align:center;color:rgba(226,232,240,.6)">Sem imagens</div>';
    return;
  }

  imagens.forEach((src, i) => {
    const slide = document.createElement('div');
    slide.className = 'slide';
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Slide ${i + 1}`;
    img.loading = 'lazy';
    img.addEventListener('error', function(){
      this.src = 'img/placeholder.png';
    });
    slide.appendChild(img);
    track.appendChild(slide);

    const dot = document.createElement('button');
    dot.setAttribute('aria-label', 'Ir para imagem ' + (i + 1));
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => showSlide(i));
    indicators.appendChild(dot);
  });

  if (imagens.length > 1) {
    const prev = document.createElement('button');
    prev.className = 'arrow prev';
    prev.innerHTML = '❮';
    prev.addEventListener('click', () => showSlide(current - 1));
    carousel.appendChild(prev);

    const next = document.createElement('button');
    next.className = 'arrow next';
    next.innerHTML = '❯';
    next.addEventListener('click', () => showSlide(current + 1));
    carousel.appendChild(next);
  }

  let current = 0;
  function showSlide(n) {
    const slides = track.querySelectorAll('.slide');
    const dots = indicators.querySelectorAll('button');
    if (!slides.length) return;
    current = (n + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach(d => d.classList.remove('active'));
    if (dots[current]) dots[current].classList.add('active');
  }

  document.addEventListener('keydown', function(ev){
    if(ev.key === 'ArrowLeft') showSlide(current-1);
    if(ev.key === 'ArrowRight') showSlide(current+1);
  });

  let intervalId = null;
  const autoplay = !!options.autoplay;
  const interval = options.interval || 5000;

  if (autoplay && imagens.length > 1) {
    intervalId = setInterval(() => showSlide(current + 1), interval);
    
    carousel.addEventListener('mouseenter', () => clearInterval(intervalId));
    carousel.addEventListener('mouseleave', () => (intervalId = setInterval(()=> showSlide(current+1), interval)));
  }

 
  return {
    pause() { if (intervalId) clearInterval(intervalId); intervalId = null; },
    play() { if (!intervalId && autoplay) intervalId = setInterval(()=> showSlide(current+1), interval); }
  };
};

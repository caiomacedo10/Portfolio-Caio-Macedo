
const projetos = [
  {
    id: "dev-burguer",
    nome: "Dev Burguer",
    descricao: "E-commerce completo de hamburgueria desenvolvido para resolver o desafio de criar uma experiência digital completa de pedidos online. Aplicação Full Stack com autenticação JWT, vitrine de produtos, carrinho de compras inteligente, painel administrativo para gestão e integração de pagamentos seguros via Stripe. Tecnologias: React, Node.js, Express, PostgreSQL, Sequelize e JWT. Principal desafio: implementar fluxo completo de e-commerce com segurança e experiência de usuário fluida.",
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
       descricao: "Ferramenta de conversão de moedas criada para resolver a necessidade de consultas rápidas e precisas de câmbio em tempo real. Integração com AwesomeAPI para cotações atualizadas de Real, Dólar, Euro, Libra e Bitcoin. Tecnologias: HTML5, CSS3, JavaScript vanilla com Fetch API e async/await. Desafio técnico: manipulação dinâmica do DOM, formatação internacional com Intl.NumberFormat e design responsivo com foco em usabilidade.",
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
     descricao: "Catálogo interativo de filmes e séries desenvolvido para resolver o problema de descoberta de conteúdo audiovisual. Integração completa com TMDb API para explorar catálogo global, visualizar trailers, elenco, avaliações e recomendações personalizadas. Tecnologias: React.js, Axios, React Router DOM e Styled-Components. Desafio: consumo eficiente de API externa, roteamento dinâmico e componentização para interface moderna e responsiva.",
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
     descricao: "Sistema de gestão financeira pessoal criado para resolver o problema de controle de receitas e despesas de forma visual e intuitiva. Plataforma Full Stack com dashboard interativo, gráficos dinâmicos e categorização personalizada. Destaque para consumo de API REST própria desenvolvida com Node.js, Fastify e MongoDB, integrada ao front-end React + TypeScript. Tecnologias: React, TypeScript, Tailwind CSS, Node.js, Prisma, MongoDB, Fastify e autenticação Google OAuth. Desafio: criar API robusta e dashboard responsivo com visualização de dados em tempo real.",
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
    descricao: "Website institucional para cafeteria artesanal, criado para apresentar produtos e ambiente de forma elegante e profissional. Landing page moderna com cardápio interativo, seção de contato e design inspirado em cafeterias boutique. Tecnologias: HTML5 semântico, CSS3 com animações e JavaScript vanilla. Desafio: criar experiência visual envolvente mantendo performance e responsividade em todos os dispositivos.",
    imagens: [
      "img/CafeteriaPorfolio.png",
      "img/CafeteriaPortfolio2.png",
    ],
    tags: ["HTML", "CSS", "Modern Design", "Responsive"],
    linkProjeto: "#",
    linkCodigo: "https://github.com/caiomacedo10/treinando.git",
    ano: "2025"
  },
  {
     id: "cadastro-usuarios",
    nome: "Cadastro de Usuários",
  descricao: "Sistema CRUD de gerenciamento de usuários desenvolvido para demonstrar integração Full Stack básica. Permite cadastro, listagem e exclusão de usuários com avatares aleatórios via API externa. Tecnologias: React no front-end e Node.js + Express no back-end. Desafio: criar interface fluida e responsiva com operações assíncronas e feedback visual imediato para o usuário.",
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

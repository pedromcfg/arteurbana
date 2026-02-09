// Dados padrão dos Artistas (fallback)
const DEFAULT_ARTISTS = [
  {
    id: 'hazul',
    name: 'Hazul',
    shortBio: 'Artista urbano do Porto com murais icónicos pela cidade.',
    fullBio: 'Mural no Bairro do Carvalhido realizado para a Domus Social e CM Porto, em Janeiro 2019.',
    image: 'arteUrbana/hazul0.jpg',
    works: [
      'arteUrbana/hazul0.jpg',
      'arteUrbana/Hazul 1.jpg',
      'arteUrbana/Hazul 2.jpg',
      'arteUrbana/Hazul 3.jpg',
      'arteUrbana/Hazul 4.jpg',
      'arteUrbana/Hazul 5.jpg',
    ],
  },
  {
    id: 'mr-dheo',
    name: 'Mr. Dheo',
    shortBio: 'Conhecido pelos retratos realistas e colaborações internacionais.',
    fullBio: 'Mr.Dheo é autor de vários murais de arte urbana espalhados pelo país e por vários cantos do mundo – desde a sua cidade natal, Vila Nova de Gaia, até ao Porto, Miami, São Paulo, Joanesburgo ou Dubai.',
    image: 'arteUrbana/mrDheo0.webp',
    works: [
      'arteUrbana/mrDheo0.webp',
      'arteUrbana/Mr dheo 2.webp',
      'arteUrbana/MR dheo 3.webp',
      'arteUrbana/Mr dheo 4.webp',
      'arteUrbana/Mr dheo 5.jpg',
    ],
  },
  {
    id: 'vhils',
    name: 'Vhils',
    shortBio: 'Artista conhecido pela técnica única de remoção de camadas de paredes para criar murais.',
    fullBio: 'Alexandre Farto aka Vhils (n. 1987) desenvolveu uma linguagem visual singular com base na remoção das camadas superficiais de paredes e outros suportes através de ferramentas e técnicas não convencionais. Começou a interagir com o espaço urbano através da prática do graffiti no início da década de 2000.',
    image: 'arteUrbana/vhils0.jpg',
    works: [
      'arteUrbana/vhils0.jpg',
      'arteUrbana/Vhills 1.webp',
      'arteUrbana/vhills 2.webp',
      'arteUrbana/vhills 3.webp',
    ],
  },
  {
    id: 'pariz-one',
    name: 'Pariz One',
    shortBio: 'Mestre do wildstyle e visionário das letras no universo do graffiti.',
    fullBio: 'Pariz One, um nome que ecoa no mundo do graffiti como um raio de criatividade e coragem. Nascido em 1984, é um artista audacioso, um mestre do wildstyle, e um visionário do universo das letras. A sua jornada começou em 1999, quando as paredes da cidade se tornaram o seu caderno de rascunhos e o spray a sua ferramenta de expressão.',
    image: 'arteUrbana/parizOne.jpeg',
    works: ['arteUrbana/parizOne.jpeg'],
  },
  {
    id: 'bordalo-ii',
    name: 'Bordalo II',
    shortBio: 'Artista que utiliza lixo e sucata para criar esculturas e murais de grande impacto visual.',
    fullBio: 'Chapas, teclados de computador, pneus de bicicleta são alguns dos objetos escolhidos por Bordalo II para a produção das suas obras. Artur Bordalo, neto do artista plástico Real Bordalo, nasceu em 1987, em Lisboa.',
    image: 'arteUrbana/bordalo0.jpg',
    works: [
      'arteUrbana/bordalo0.jpg',
      'arteUrbana/bordalo1.webp',
      'arteUrbana/Bordalo II 1.jpg',
      'arteUrbana/Bordalo II 2.jpg',
      'arteUrbana/Bordalo II 3.jpg',
      'arteUrbana/Bordalo II 4.jpg',
      'arteUrbana/Bordalo II 5.webp',
    ],
  },
  {
    id: 'pariz-one',
    name: 'Pariz One',
    shortBio: 'Artista audacioso, mestre do wildstyle e visionário do universo das letras.',
    fullBio: 'Pariz One, um nome que ecoa no mundo do graffiti como um raio de criatividade e coragem. Nascido em 1984, é um artista audacioso, um mestre do wildstyle, e um visionário do universo das letras. A sua jornada começou em 1999, quando as paredes da cidade se tornaram o seu caderno de rascunhos e o spray a sua ferramenta de expressão.',
    image: 'arteUrbana/parizOne.jpeg',
  },
  {
    id: 'add-fuel',
    name: 'Add Fuel',
    shortBio: 'Artista português conhecido por padrões intrincados e reinterpretações ousadas de arte tradicional.',
    fullBio: 'Add Fuel é o nome artístico do artista contemporâneo português Diogo Machado. Reconhecido por sua abordagem inovadora às formas de arte tradicionais, ele é conhecido por seus padrões intrincados, reinterpretações ousadas e atenção meticulosa aos detalhes, criando composições multifacetadas que unem a elegância atemporal do patrimônio à cultura visual contemporânea.',
    image: 'arteUrbana/addFuel0.jpg',
    works: ['arteUrbana/addFuel0.jpg'],
  },
  {
    id: 'ella-pitr',
    name: 'Ella & Pitr',
    shortBio: 'Dupla de artistas conhecida pelo projeto Papier Peintres e intervenções urbanas de grande escala.',
    fullBio: 'Ella & Pitr formam a dupla Papier Peintres, um conceito que nasceu em 2007 a partir de um encontro aleatório enquanto ambos faziam colagens numa rua de St. Etienne. Hoje têm um atelier na mesma cidade e a rua mantém-se o seu território de expressão espontânea.',
    image: 'arteUrbana/EllaPitr.jpg',
    works: ['arteUrbana/EllaPitr.jpg'],
  },
  {
    id: 'hugo-makarov',
    name: 'Hugo Makarov',
    shortBio: 'Artista lisboeta com percurso entre a tatuagem e a ilustração de publicidade e editorial.',
    fullBio: 'Nascido em Lisboa em 1979 e desde cedo exposto a artes visuais como a banda desenhada e ilustração, acabou por entrar no mundo da tatuagem e ilustração de publicidade e editorial enquanto ainda estava na faculdade, actividades que conseguiu conjugar durante dez anos, trabalhando em alguns dos estúdios de tatuagens mais marcantes de Lisboa e ao mesmo tempo participando em projectos comerciais com empresas como o Continente ou a Worten.',
    image: 'arteUrbana/makarov.jpg',
    works: ['arteUrbana/makarov.jpg'],
  },
  {
    id: 'odeith',
    name: 'Odeith',
    shortBio: 'Pioneiro do graffiti em Portugal, conhecido pelas obras 3D e origens na Damaia.',
    fullBio: 'Odeith nasceu em 1976, na Damaia. Teve pela primeira vez nas mãos uma lata de spray em meados dos anos de 1980, mas foi na década seguinte, quando o graffiti se começou a disseminar em Portugal, que teve o primeiro contacto com o movimento que se iniciava.',
    image: 'arteUrbana/odeith.webp',
    works: [
      'arteUrbana/odeith.webp',
      'arteUrbana/Odeith 1.jpg',
      'arteUrbana/Odeith 2.jpg',
      'arteUrbana/Odeith 3.jpg',
      'arteUrbana/Odeith 4.jpg',
      'arteUrbana/Odeith 5.jpg',
    ],
  },
  {
    id: 'oaktree',
    name: 'Oaktree',
    shortBio: 'Ilustrador e pintor que explora emoção e adoração à Natureza através de traços energéticos.',
    fullBio: 'Tiago de Carvalho (a.k.a. Oaktree). Ilustrador e Pintor. O seu trabalho consiste sobretudo na exploração de emoção e adoração à Natureza através de ritmo, movimento e traços energéticos.',
    image: 'arteUrbana/Oaktree.webp',
    works: ['arteUrbana/Oaktree.webp'],
  },
  {
    id: 'mario-belem',
    name: 'Mário Belém',
    shortBio: 'Designer gráfico e ilustrador lisboeta que se dedica atualmente a projetos pessoais.',
    fullBio: 'Mário Belém (Lisboa, 1977) é formado em design gráfico pelo Ar.Co. Trabalhou em diversas areas relacionadas com comunicação, mas foi como ilustrador que ganhou maior notoriedade. Recentemente deixou a sua carreira comercial para se dedicar exclusivamente à criação de projetos pessoais.',
    image: 'arteUrbana/marioBelem.jpg',
    works: ['arteUrbana/marioBelem.jpg'],
  },
  {
    id: 'miguel-brum',
    name: 'Miguel Brum',
    shortBio: 'Ilustrador e tatuador marcado pela cultura e vida urbana, com raízes no graffiti dos anos 90.',
    fullBio: 'O ilustrador e tatuador Miguel Brum desde muito cedo sentiu-se atraído pela cultura e pela vida urbana. As suas primeiras incursões artísticas começaram com o graffiti na década de 1990, com a criação de murais de grande porte com assinaturas ousadas e figuras proeminentes.',
    image: 'arteUrbana/miguelBrum.jpg',
    works: ['arteUrbana/miguelBrum.jpg'],
  },
  {
    id: 'pixel-pancho',
    name: 'Pixel Pancho',
    shortBio: 'Artista italiano conhecido pelos seus murais de robôs e personagens mecânicas com forte carga emocional.',
    fullBio: 'O Pixel Pancho Studio foi fundado por Pixel Pancho, um artista nascido em Turim em 1984 e apresentado à cor e à forma por seu avô, que pintava ocasionalmente.',
    image: 'arteUrbana/pixel0.png',
    works: [
      'arteUrbana/pixel0.png',
      'arteUrbana/Pixel Pancho 1.jpg',
      'arteUrbana/Pixel Pancho 2.jpg',
      'arteUrbana/Pixel Pancho 3.jpg',
      'arteUrbana/Pixel Pancho 4.jpg',
      'arteUrbana/Pixel Pancho 5.jpg',
    ],
  },
  {
    id: 'os-gemeos',
    name: 'Os Gêmeos',
    shortBio: 'Dupla de irmãos grafiteiros de São Paulo que ajudou a definir um estilo brasileiro de graffiti.',
    fullBio: 'Os Gêmeos são uma dupla de irmãos grafiteiros de São Paulo, nascidos em 1974, cujos nomes reais são Otávio Pandolfo e Gustavo Pandolfo. Formados em desenho de comunicação pela Escola Técnica Estadual Carlos de Campos, começaram a pintar grafites em 1990 no bairro em que cresceram, o Cambuci, e gradualmente tornaram-se uma das influências mais importantes na cena paulistana, ajudando a definir um estilo brasileiro de grafite.',
    image: 'arteUrbana/gemeos.webp',
    works: [
      'arteUrbana/gemeos.webp',
      'arteUrbana/Os Gêmeos  1.jpg',
      'arteUrbana/Os Gêmeos  2.jpg',
      'arteUrbana/Os Gêmeos  3.jpg',
      'arteUrbana/Os Gêmeos  4.jpg',
      'arteUrbana/Os Gêmeos  5.jpg',
    ],
  },
  {
    id: 'other',
    name: 'Outro Artista',
    shortBio: 'Exemplo de artista para o protótipo da aplicação.',
    fullBio: 'Este é um artista de exemplo usado para preencher o layout da aplicação PAP, podendo ser substituído por informação real mais tarde.',
    image: 'arteUrbana/mrDheo0.webp', // Placeholder - substituir quando tiver imagem
  },
];

// Carregar artistas - tenta JSON do servidor primeiro, depois localStorage, depois padrão
async function loadArtists() {
  try {
    // Tentar carregar do ficheiro JSON no repositório
    const response = await fetch('data/artists.json');
    if (response.ok) {
      const artists = await response.json();
      if (artists && Array.isArray(artists) && artists.length > 0) {
        // Guardar também no localStorage como cache
        localStorage.setItem('street_art_artists', JSON.stringify(artists));
        return artists;
      }
    }
  } catch (e) {
    // Ficheiro não existe ou erro ao carregar - continuar para localStorage
    console.log('Ficheiro data/artists.json não encontrado, usando localStorage ou dados padrão');
  }

  // Tentar localStorage
  const STORAGE_KEY = 'street_art_artists';
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      const artists = JSON.parse(stored);
      if (artists && Array.isArray(artists) && artists.length > 0) {
        return artists;
      }
    } catch (e) {
      console.error('Erro ao carregar artistas do localStorage:', e);
    }
  }
  
  // Usar dados padrão
  return DEFAULT_ARTISTS;
}

// Variável global com os artistas atuais (será preenchida na inicialização)
let ARTISTS = DEFAULT_ARTISTS;

// Dados dos Roteiros
const ROUTES = [
  {
    id: 'historic',
    name: 'Roteiro Histórico',
    description: 'Passeio pelos murais mais emblemáticos do centro histórico do Porto.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Porto%20Portugal%20street%20art',
  },
  {
    id: 'rio-douro',
    name: 'Roteiro Margem do Douro',
    description: 'Graffitis e murais junto ao rio, perfeitos para fotos ao pôr do sol.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Ribeira%20do%20Porto%20street%20art',
  },
  {
    id: 'off-center',
    name: 'Roteiro Fora do Centro',
    description: 'Explora bairros menos turísticos com peças de grande escala.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Campanha%20Porto%20street%20art',
  },
];

// Estado da aplicação
let currentScreen = 'homepage';
let currentArtistId = null;

// Inicialização
document.addEventListener('DOMContentLoaded', async () => {
    // Carregar artistas (tenta JSON, depois localStorage, depois padrão)
    ARTISTS = await loadArtists();
    
    initializeNavigation();
    renderArtists();
    renderRoutes();
    
    // Listener para atualizar quando os dados mudarem (quando voltar do backoffice)
    window.addEventListener('storage', async (e) => {
        if (e.key === 'street_art_artists') {
            ARTISTS = await loadArtists();
            renderArtists();
        }
    });
    
    // Também verificar mudanças no mesmo tab (para quando editar no mesmo navegador)
    setInterval(async () => {
        const newArtists = await loadArtists();
        if (JSON.stringify(newArtists) !== JSON.stringify(ARTISTS)) {
            ARTISTS = newArtists;
            renderArtists();
        }
    }, 2000);
});

// Navegação
function initializeNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const screen = item.getAttribute('data-screen');
            navigateToScreen(screen);
        });
    });
}

function navigateToScreen(screenName) {
    // Esconder todos os ecrãs
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Remover active de todos os nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Mostrar ecrã selecionado
    const targetScreen = document.getElementById(screenName);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }
    
    // Ativar nav item correspondente
    const navItem = document.querySelector(`[data-screen="${screenName}"]`);
    if (navItem) {
        navItem.classList.add('active');
    }
    
    currentScreen = screenName;
    
    // Se voltar para a lista de artistas, resetar o estado
    if (screenName === 'artists-list') {
        currentArtistId = null;
    }
}

// Renderizar Artistas
function renderArtists() {
    const container = document.getElementById('artists-container');
    if (!container) return;
    
    container.innerHTML = ARTISTS.map(artist => `
        <div class="artist-card">
            <img src="${artist.image}" alt="${artist.name}" class="artist-photo" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="artist-photo-placeholder" style="display: none;">FOTO ${artist.name}</div>
            <div class="artist-card-content">
                <h2 class="artist-name">${artist.name}</h2>
                <p class="artist-short-bio">${artist.shortBio}</p>
                <button class="btn-ver-mais" onclick="showArtistDetail('${artist.id}')">Ver mais</button>
            </div>
        </div>
    `).join('');
}

function showArtistDetail(artistId) {
    const artist = ARTISTS.find(a => a.id === artistId);
    if (!artist) return;
    
    currentArtistId = artistId;
    
    // Esconder lista de artistas
    document.getElementById('artists-list').classList.remove('active');
    
    // Mostrar detalhe do artista
    const detailScreen = document.getElementById('artist-detail');
    const detailContent = document.getElementById('artist-detail-content');
    
    detailContent.innerHTML = `
        <img src="${artist.image}" alt="${artist.name}" class="artist-detail-photo-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="artist-detail-photo" style="display: none;">FOTO ${artist.name}</div>
        <h1 class="artist-detail-name">${artist.name}</h1>
        <p class="artist-full-bio">${artist.fullBio}</p>
        <div class="artist-works-section">
            <h2 class="artist-works-title">Obras</h2>
            <div class="artist-works-list">
                ${artist.works && artist.works.length > 0 
                    ? artist.works.map(work => `
                        <img src="${work}" alt="Obra de ${artist.name}" class="work-image" onclick="openImageModal('${work}', 'Obra de ${artist.name}')" onerror="this.style.display='none';">
                    `).join('')
                    : `
                        <div class="work-placeholder">OBRA 1</div>
                        <div class="work-placeholder">OBRA 2</div>
                        <div class="work-placeholder">OBRA 3</div>
                    `
                }
            </div>
        </div>
        <button class="btn-voltar" onclick="backToArtists()">Voltar aos artistas</button>
    `;
    
    detailScreen.classList.add('active');
}

function backToArtists() {
    document.getElementById('artist-detail').classList.remove('active');
    document.getElementById('artists-list').classList.add('active');
    currentArtistId = null;
}

// Renderizar Roteiros
function renderRoutes() {
    const container = document.getElementById('routes-container');
    if (!container) return;
    
    container.innerHTML = ROUTES.map(route => `
        <div class="route-item">
            <div class="route-map-placeholder" onclick="openMaps('${route.mapsUrl}')">
                MAPA
            </div>
            <h2 class="route-name">${route.name}</h2>
            <p class="route-description">${route.description}</p>
        </div>
    `).join('');
}

function openMaps(url) {
    window.open(url, '_blank');
}

// Modal de imagem (zoom)
function openImageModal(src, caption) {
    const modal = document.getElementById('image-modal');
    const img = document.getElementById('image-modal-img');
    const captionEl = document.getElementById('image-modal-caption');
    if (!modal || !img || !captionEl) return;

    img.src = src;
    img.alt = caption || '';
    captionEl.textContent = caption || '';
    modal.classList.add('active');
}

function closeImageModal() {
    const modal = document.getElementById('image-modal');
    const img = document.getElementById('image-modal-img');
    const captionEl = document.getElementById('image-modal-caption');
    if (!modal || !img || !captionEl) return;

    modal.classList.remove('active');
    img.src = '';
    img.alt = '';
    captionEl.textContent = '';
}

// Fechar modal ao clicar fora da imagem
document.addEventListener('click', (event) => {
    const modal = document.getElementById('image-modal');
    if (!modal) return;
    if (!modal.classList.contains('active')) return;

    const inner = modal.querySelector('.image-modal-inner');
    if (event.target === modal && inner && !inner.contains(event.target)) {
        closeImageModal();
    }
});

// Fechar modal com ESC
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeImageModal();
    }
});


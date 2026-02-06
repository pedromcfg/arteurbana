// Dados padrão dos Artistas (fallback)
const DEFAULT_ARTISTS = [
  {
    id: 'hazul',
    name: 'Hazul',
    shortBio: 'Artista urbano do Porto com murais icónicos pela cidade.',
    fullBio: 'Hazul é um dos nomes mais reconhecidos da arte urbana portuense, conhecido pelos seus traços orgânicos e figuras enigmáticas que ocupam fachadas por toda a cidade.',
    image: 'Arte urbana/41857508151_808983d676_b.webp', // Placeholder - substituir quando tiver imagem do Hazul
  },
  {
    id: 'mr-dheo',
    name: 'Mr. Dheo',
    shortBio: 'Conhecido pelos retratos realistas e colaborações internacionais.',
    fullBio: 'Mr.Dheo é autor de vários murais de arte urbana espalhados pelo país e por vários cantos do mundo – desde a sua cidade natal, Vila Nova de Gaia, até ao Porto, Miami, São Paulo, Joanesburgo ou Dubai.',
    image: 'Arte urbana/41857508151_808983d676_b.webp',
  },
  {
    id: 'vhils',
    name: 'Vhils',
    shortBio: 'Artista conhecido pela técnica única de remoção de camadas de paredes para criar murais.',
    fullBio: 'Alexandre Farto aka Vhils (n. 1987) desenvolveu uma linguagem visual singular com base na remoção das camadas superficiais de paredes e outros suportes através de ferramentas e técnicas não convencionais. Começou a interagir com o espaço urbano através da prática do graffiti no início da década de 2000.',
    image: 'Arte urbana/1481082.jpg',
  },
  {
    id: 'other',
    name: 'Outro Artista',
    shortBio: 'Exemplo de artista para o protótipo da aplicação.',
    fullBio: 'Este é um artista de exemplo usado para preencher o layout da aplicação PAP, podendo ser substituído por informação real mais tarde.',
    image: 'Arte urbana/41857508151_808983d676_b.webp', // Placeholder - substituir quando tiver imagem
  },
];

// Carregar artistas do localStorage ou usar os padrão
function getArtists() {
  const STORAGE_KEY = 'street_art_artists';
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      const artists = JSON.parse(stored);
      if (artists && artists.length > 0) {
        return artists;
      }
    } catch (e) {
      console.error('Erro ao carregar artistas do localStorage:', e);
    }
  }
  return DEFAULT_ARTISTS;
}

// Variável global com os artistas atuais
let ARTISTS = getArtists();

// Dados das Imagens
const IMAGES = [
  { id: '1', artist: 'Hazul', title: 'Mural Ribeira' },
  { id: '2', artist: 'Mr. Dheo', title: 'Retrato Urbano' },
  { id: '3', artist: 'Outro Artista', title: 'Abstrato Colorido' },
  { id: '4', artist: 'Hazul', title: 'Figura Orgânica' },
];

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
document.addEventListener('DOMContentLoaded', () => {
    // Recarregar artistas do localStorage
    ARTISTS = getArtists();
    
    initializeNavigation();
    renderArtists();
    renderImages();
    renderRoutes();
    
    // Listener para atualizar quando os dados mudarem (quando voltar do backoffice)
    window.addEventListener('storage', (e) => {
        if (e.key === 'street_art_artists') {
            ARTISTS = getArtists();
            renderArtists();
        }
    });
    
    // Também verificar mudanças no mesmo tab (para quando editar no mesmo navegador)
    setInterval(() => {
        const newArtists = getArtists();
        if (JSON.stringify(newArtists) !== JSON.stringify(ARTISTS)) {
            ARTISTS = newArtists;
            renderArtists();
        }
    }, 1000);
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
                <div class="work-placeholder">OBRA 1</div>
                <div class="work-placeholder">OBRA 2</div>
                <div class="work-placeholder">OBRA 3</div>
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

// Renderizar Imagens
function renderImages() {
    const container = document.getElementById('images-container');
    if (!container) return;
    
    container.innerHTML = IMAGES.map(image => `
        <div class="image-item">
            <div class="image-artist-name">${image.artist}</div>
            <div class="image-placeholder">${image.title}</div>
        </div>
    `).join('');
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


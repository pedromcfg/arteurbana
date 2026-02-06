// Password de acesso
const BACKOFFICE_PASSWORD = 'arteurbana';

// Chave para localStorage
const STORAGE_KEY = 'street_art_artists';

// Estado
let isEditing = false;
let editingId = null;

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Verificar se já está autenticado
    const isAuthenticated = sessionStorage.getItem('backoffice_authenticated') === 'true';
    if (isAuthenticated) {
        showMainScreen();
    } else {
        showLoginScreen();
    }

    // Event listener para gerar nome da imagem automaticamente
    const nameInput = document.getElementById('artist-name');
    if (nameInput) {
        nameInput.addEventListener('input', updateImageName);
    }
});

// Login
function handleLogin(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('login-error');

    if (password === BACKOFFICE_PASSWORD) {
        sessionStorage.setItem('backoffice_authenticated', 'true');
        showMainScreen();
        errorMsg.textContent = '';
    } else {
        errorMsg.textContent = 'Password incorreta!';
        document.getElementById('password').value = '';
    }
}

function showLoginScreen() {
    document.getElementById('login-screen').classList.add('active');
    document.getElementById('main-screen').classList.remove('active');
}

function showMainScreen() {
    document.getElementById('login-screen').classList.remove('active');
    document.getElementById('main-screen').classList.add('active');
    loadArtists();
}

function logout() {
    sessionStorage.removeItem('backoffice_authenticated');
    showLoginScreen();
    resetForm();
}

// Gerar nome da imagem a partir do nome do artista
function updateImageName() {
    const nameInput = document.getElementById('artist-name');
    const imageInput = document.getElementById('artist-image');
    const imagePreview = document.getElementById('image-preview');
    
    if (nameInput && imageInput && imagePreview) {
        const artistName = nameInput.value.trim().toLowerCase().replace(/\s+/g, '');
        if (artistName) {
            // Assumir que a extensão será .jpg (pode ser ajustado)
            const imageName = `Arte urbana/${artistName}.jpg`;
            imageInput.value = imageName;
            imagePreview.textContent = imageName;
        } else {
            imageInput.value = '';
            imagePreview.textContent = '';
        }
    }
}

// Carregar artistas do localStorage
function loadArtists() {
    const artists = getArtistsFromStorage();
    renderArtistsList(artists);
}

function getArtistsFromStorage() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
        try {
            return JSON.parse(stored);
        } catch (e) {
            console.error('Erro ao carregar artistas:', e);
            return [];
        }
    }
    return [];
}

function saveArtistsToStorage(artists) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(artists));
    } catch (e) {
        console.error('Erro ao salvar artistas:', e);
        alert('Erro ao salvar. Verifique se o navegador suporta localStorage.');
    }
}

// Renderizar lista de artistas
function renderArtistsList(artists) {
    const container = document.getElementById('artists-list');
    if (!container) return;

    if (artists.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>Nenhum artista cadastrado ainda.</p></div>';
        return;
    }

    container.innerHTML = artists.map(artist => `
        <div class="artist-item">
            <div class="artist-info">
                <h3>${artist.name}</h3>
                <p><strong>Bio curta:</strong> ${artist.shortBio}</p>
                <p><strong>Imagem:</strong> ${artist.image}</p>
            </div>
            <div class="artist-actions">
                <button class="btn-edit" onclick="editArtist('${artist.id}')">Editar</button>
                <button class="btn-danger" onclick="deleteArtist('${artist.id}')">Eliminar</button>
            </div>
        </div>
    `).join('');
}

// Submeter formulário
function handleSubmit(event) {
    event.preventDefault();

    const formData = {
        id: document.getElementById('artist-id').value || generateId(),
        name: document.getElementById('artist-name').value.trim(),
        shortBio: document.getElementById('artist-short-bio').value.trim(),
        fullBio: document.getElementById('artist-full-bio').value.trim(),
        image: document.getElementById('artist-image').value.trim(),
    };

    // Validação
    if (!formData.name || !formData.shortBio || !formData.fullBio || !formData.image) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const artists = getArtistsFromStorage();

    if (isEditing && editingId) {
        // Editar artista existente
        const index = artists.findIndex(a => a.id === editingId);
        if (index !== -1) {
            artists[index] = formData;
            showMessage('Artista atualizado com sucesso!', 'success');
        }
    } else {
        // Adicionar novo artista
        artists.push(formData);
        showMessage('Artista adicionado com sucesso!', 'success');
    }

    saveArtistsToStorage(artists);
    loadArtists();
    resetForm();
}

// Gerar ID único
function generateId() {
    return 'artist_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

// Editar artista
function editArtist(id) {
    const artists = getArtistsFromStorage();
    const artist = artists.find(a => a.id === id);

    if (!artist) {
        alert('Artista não encontrado.');
        return;
    }

    isEditing = true;
    editingId = id;

    // Preencher formulário
    document.getElementById('artist-id').value = artist.id;
    document.getElementById('artist-name').value = artist.name;
    document.getElementById('artist-short-bio').value = artist.shortBio;
    document.getElementById('artist-full-bio').value = artist.fullBio;
    document.getElementById('artist-image').value = artist.image;
    document.getElementById('image-preview').textContent = artist.image;

    // Atualizar UI
    document.getElementById('form-title').textContent = 'Editar Artista';
    document.getElementById('submit-btn').textContent = 'Atualizar Artista';
    document.getElementById('cancel-btn').style.display = 'block';

    // Scroll para o formulário
    document.querySelector('.form-section').scrollIntoView({ behavior: 'smooth' });
}

// Eliminar artista
function deleteArtist(id) {
    if (!confirm('Tem certeza que deseja eliminar este artista?')) {
        return;
    }

    const artists = getArtistsFromStorage();
    const filtered = artists.filter(a => a.id !== id);
    saveArtistsToStorage(filtered);
    loadArtists();
    showMessage('Artista eliminado com sucesso!', 'success');
}

// Resetar formulário
function resetForm() {
    isEditing = false;
    editingId = null;

    document.getElementById('artist-form').reset();
    document.getElementById('artist-id').value = '';
    document.getElementById('image-preview').textContent = '';
    document.getElementById('form-title').textContent = 'Adicionar Novo Artista';
    document.getElementById('submit-btn').textContent = 'Adicionar Artista';
    document.getElementById('cancel-btn').style.display = 'none';
}

// Mostrar mensagem
function showMessage(message, type) {
    // Remover mensagens anteriores
    const existing = document.querySelector('.success-message, .error-message');
    if (existing && existing.id !== 'login-error') {
        existing.remove();
    }

    const messageDiv = document.createElement('div');
    messageDiv.className = type === 'success' ? 'success-message' : 'error-message';
    messageDiv.textContent = message;

    const formSection = document.querySelector('.form-section');
    if (formSection) {
        formSection.insertBefore(messageDiv, formSection.firstChild);
        
        // Remover após 3 segundos
        setTimeout(() => {
            messageDiv.remove();
        }, 3000);
    }
}


# Prompt para Recriar App em HTML/CSS/JavaScript

## Contexto do Projeto

Criar uma aplicação web (HTML/CSS/JavaScript) chamada **"Street Art Stories: Porto a Cores"** que tem como objetivo dar a conhecer a arte urbana (graffitis) da cidade do Porto, Portugal, a turistas.

## Estrutura e Navegação

A aplicação deve ter uma **navbar inferior fixa** (bottom navigation bar) que aparece em TODOS os ecrãs, com 4 tabs:

1. **Homepage**
2. **Artistas**
3. **Imagens**
4. **Roteiros**

A navbar deve ter:
- Altura de 64px
- Fundo branco (#FFFFFF)
- Borda superior cinzenta (#E5E7EB)
- Texto ativo: #111827 (cinza escuro)
- Texto inativo: #9CA3AF (cinza claro)
- Fonte: 12px, peso 600
- Padding vertical de 8px

## Ecrãs Detalhados

### 1. Homepage

- **Conteúdo**: Apenas o logo no centro do ecrã
- **Layout**: Logo centralizado vertical e horizontalmente
- **Estilo**: Fundo branco, logo com 256px x 256px (w-64 h-64), cantos arredondados (rounded-xl), fundo cinza claro (#F3F4F6) como placeholder
- **Nota**: O logo é um placeholder por enquanto (pode ser um div cinzento com texto "LOGO")

### 2. Artistas

Este ecrã tem **dois estados**:

#### Estado 1: Lista de Artistas
- Lista vertical scrollável com cartões de artistas
- Cada cartão contém:
  - **Foto do artista** (placeholder: div cinzento 100% largura, altura 160px, com texto "FOTO [Nome]")
  - **Nome do artista** (texto grande, negrito)
  - **Pequena biografia** (texto pequeno, cinza)
  - **Botão "Ver mais"** (fundo azul #2563EB, texto branco, padding vertical 8px, cantos arredondados)

#### Estado 2: Página do Artista (ao clicar "Ver mais")
- Layout vertical scrollável com:
  1. **Foto do artista no topo** (placeholder: div cinzento, altura 256px, largura 100%)
  2. **Nome do artista** (texto 2xl, negrito)
  3. **Biografia completa** (texto base, cinza)
  4. **Secção "Obras"** com título
  5. **3 imagens das obras** (placeholders: divs cinzentos, altura 160px cada, em coluna vertical com espaçamento)
  6. **Botão "Voltar aos artistas"** (fundo preto #111827, texto branco, padding vertical 12px)

**Dados dos Artistas:**
```javascript
const ARTISTS = [
  {
    id: 'hazul',
    name: 'Hazul',
    shortBio: 'Artista urbano do Porto com murais icónicos pela cidade.',
    fullBio: 'Hazul é um dos nomes mais reconhecidos da arte urbana portuense, conhecido pelos seus traços orgânicos e figuras enigmáticas que ocupam fachadas por toda a cidade.',
  },
  {
    id: 'mr-dheo',
    name: 'Mr. Dheo',
    shortBio: 'Conhecido pelos retratos realistas e colaborações internacionais.',
    fullBio: 'Mr. Dheo combina realismo com elementos gráficos, criando murais de grande impacto visual tanto no Porto como em várias cidades pelo mundo.',
  },
  {
    id: 'other',
    name: 'Outro Artista',
    shortBio: 'Exemplo de artista para o protótipo da aplicação.',
    fullBio: 'Este é um artista de exemplo usado para preencher o layout da aplicação PAP, podendo ser substituído por informação real mais tarde.',
  },
];
```

### 3. Imagens (Galeria)

- **Layout**: Galeria vertical scrollável
- Cada item contém:
  - **Nome do artista em cima** (texto pequeno, semibold, cinza)
  - **Imagem placeholder** (div cinzento, altura 192px, largura 100%, cantos arredondados)
  - Espaçamento entre itens: 16px (mb-4)

**Dados das Imagens:**
```javascript
const IMAGES = [
  { id: '1', artist: 'Hazul', title: 'Mural Ribeira' },
  { id: '2', artist: 'Mr. Dheo', title: 'Retrato Urbano' },
  { id: '3', artist: 'Outro Artista', title: 'Abstrato Colorido' },
  { id: '4', artist: 'Hazul', title: 'Figura Orgânica' },
];
```

### 4. Roteiros

- **Layout**: Lista vertical scrollável com 3 roteiros
- Cada roteiro contém:
  1. **Imagem tipo mapa (placeholder)** (div cinzento, altura 160px, largura 100%, clicável)
     - Ao clicar, abre o Google Maps no browser/app
     - Deve ter feedback visual (opacity ao clicar)
  2. **Nome do roteiro** (texto xl, negrito)
  3. **Breve descrição** (texto pequeno, cinza)

**Dados dos Roteiros:**
```javascript
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
```

## Estilos e Design

### Cores Principais:
- Fundo: Branco (#FFFFFF)
- Texto principal: #111827 (cinza escuro)
- Texto secundário: #9CA3AF (cinza claro) ou #6B7280
- Botões primários: Azul #2563EB ou Preto #111827
- Placeholders: Cinza claro #F3F4F6 ou #E5E7EB
- Bordas: #E5E7EB

### Espaçamentos:
- Padding geral dos ecrãs: 16px
- Espaçamento entre elementos: 16px (gap-4 ou mb-4)
- Padding dos cartões: 16px (p-4)

### Tipografia:
- Títulos grandes: 24px-32px (text-2xl, text-3xl), font-bold
- Títulos médios: 20px (text-xl), font-bold
- Texto normal: 16px (text-base)
- Texto pequeno: 14px (text-sm)
- Labels navbar: 12px, font-semibold (600)

### Bordas e Cantos:
- Cantos arredondados: 8px-12px (rounded-lg, rounded-xl)
- Bordas dos cartões: 1px sólida cinza claro

## Funcionalidades JavaScript Necessárias

1. **Navegação entre tabs**: Trocar conteúdo ao clicar nos itens da navbar
2. **Estado dos Artistas**: Gerir dois estados (lista vs. detalhe do artista)
3. **Abrir Google Maps**: Usar `window.open()` ou `window.location.href` para abrir URLs do Google Maps
4. **Scroll**: Permitir scroll vertical nos ecrãs com conteúdo extenso

## Estrutura de Ficheiros Sugerida

```
/
├── index.html
├── styles.css
├── script.js
└── assets/
    └── (imagens quando disponíveis)
```

## Requisitos Técnicos

- HTML5 semântico
- CSS moderno (pode usar Flexbox/Grid)
- JavaScript vanilla (sem frameworks)
- Design responsivo (mobile-first)
- Navbar sempre fixa no fundo
- Scroll apenas no conteúdo, não na página inteira

## Comportamento Esperado

1. Ao abrir a aplicação, mostra a **Homepage** (logo no centro)
2. A navbar inferior está sempre visível
3. Ao clicar num tab da navbar, o conteúdo muda mas a navbar permanece
4. No ecrã Artistas, ao clicar "Ver mais", mostra a página do artista
5. No ecrã Roteiros, ao clicar no mapa placeholder, abre o Google Maps
6. Todos os ecrãs têm scroll se o conteúdo for maior que o ecrã

## Notas Importantes

- Todos os placeholders de imagens podem ser divs cinzentos com texto descritivo
- A aplicação deve funcionar sem imagens reais (tudo com placeholders)
- O design deve ser limpo e moderno
- Foco em mobile, mas deve funcionar em desktop também
- A navbar deve ter feedback visual ao clicar (mudança de cor do texto ativo)


// Dados simulados (depois vamos adicionar APIIIIIII )
const produtos = [
    { id: 1, nome: "iPhone 15", categoria: "Celulares", preco: 7999.99, estoque: 10 },
    { id: 2, nome: "Samsung Galaxy S23", categoria: "Celulares", preco: 4999.99, estoque: 15 },
    { id: 3, nome: "Notebook Dell", categoria: "Computadores", preco: 4299.99, estoque: 8 },
    { id: 4, nome: "MacBook Air", categoria: "Computadores", preco: 8999.99, estoque: 5 },
    { id: 5, nome: "Tablet Samsung", categoria: "Tablets", preco: 2299.99, estoque: 12 },
    { id: 6, nome: "Smart TV LG", categoria: "TVs", preco: 3299.99, estoque: 7 },
    { id: 7, nome: "Fone Sony", categoria: "Áudio", preco: 899.99, estoque: 20 },
    { id: 8, nome: "Mouse Logitech", categoria: "Periféricos", preco: 199.99, estoque: 30 }
];

// Elementos do DOM
const buscaInput = document.getElementById('busca');
const categoriaSelect = document.getElementById('categoria');
const precoSlider = document.getElementById('preco-max');
const precoValor = document.getElementById('preco-valor');
const produtosContainer = document.getElementById('produtos-container');
const quantidadeSpan = document.getElementById('quantidade');
const totalSpan = document.getElementById('total');

// Estado dos filtros
let filtros = {
    texto: '',
    categoria: '',
    precoMax: 5000
};

// Inicialização
function init() {
    carregarCategorias();
    renderProdutos();
    setupEventListeners();
    totalSpan.textContent = produtos.length;
}

// Carrega categorias no select
function carregarCategorias() {
    const categorias = [...new Set(produtos.map(p => p.categoria))];
    categorias.forEach(categoria => {
        const option = document.createElement('option');
        option.value = categoria;
        option.textContent = categoria;
        categoriaSelect.appendChild(option);
    });
}


// Configura listeners dos filtros
function setupEventListeners() {
    buscaInput.addEventListener('input', (e) => {
        filtros.texto = e.target.value.toLowerCase();
        renderProdutos();
    });

    categoriaSelect.addEventListener('change', (e) => {
        filtros.categoria = e.target.value;
        renderProdutos();
    });

    precoSlider.addEventListener('input', (e) => {
        filtros.precoMax = parseInt(e.target.value);
        precoValor.textContent = filtros.precoMax;
        renderProdutos();
    });
}


// Filtra produtos baseado nos filtros ativos

/*
textoMatch - Verifica se o nome contém o texto da busca.
categoriaMatch - Se não escolheu categoria → libera todas.
               - Se escolheu → exige que bata exatamente.

precoMatch - Só aceita produtos com preço até o valor escolhido.
*/

function filtrarProdutos() {
    return produtos.filter(produto => {
        const textoMatch = produto.nome.toLowerCase().includes(filtros.texto);
        const categoriaMatch = !filtros.categoria || produto.categoria === filtros.categoria;
        const precoMatch = produto.preco <= filtros.precoMax;
        
        return textoMatch && categoriaMatch && precoMatch;
    });
}


// Renderiza os produtos filtrados
function renderProdutos() {
    const produtosFiltrados = filtrarProdutos();
    
    produtosContainer.innerHTML = '';
    
    produtosFiltrados.forEach(produto => {
        const card = document.createElement('div');
        card.className = 'produto-card';
        card.innerHTML = `
            <h3>${produto.nome}</h3>
            <span class="categoria">${produto.categoria}</span>
            <p class="preco">R$ ${produto.preco.toFixed(2)}</p>
            <p>Estoque: ${produto.estoque} unidades</p>
            <small>ID: ${produto.id}</small>
        `;
        produtosContainer.appendChild(card);
    });
    
    quantidadeSpan.textContent = produtosFiltrados.length;
}

// Inicia a aplicação
init();
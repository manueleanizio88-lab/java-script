// 1. Selecionar os elementos
const botao = document.getElementById('btnTema');
const corpo = document.body;

botao.addEventListener('click', function() {
    
    if (corpo.classList.contains('tema-claro')) {
        corpo.classList.replace('tema-claro', 'tema-escuro');
        
        botao.textContent = 'Tema Claro';
    } else {
        corpo.classList.replace('tema-escuro', 'tema-claro');
        
        botao.textContent = 'Tema Escuro';
    }
});
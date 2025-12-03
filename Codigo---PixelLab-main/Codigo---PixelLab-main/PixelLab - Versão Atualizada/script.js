// ============================================
// INICIALIZAÇÃO DO SITE PIXELLAB
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('PixelLab - Inicializando site...');
    
    // ============================================
    // MENU HAMBURGUER - COMPLETO E FUNCIONAL
    // ============================================
    
    function initHamburgerMenu() {
        const hamburger = document.getElementById('hamburger');
        const mainMenu = document.getElementById('main-menu');
        const navLinks = document.querySelectorAll('.nav-link');
        
        // Verificação de elementos
        if (!hamburger) {
            console.error('Botão hamburguer não encontrado!');
            return;
        }
        
        if (!mainMenu) {
            console.error('Menu principal não encontrado!');
            return;
        }
        
        console.log('Menu hamburguer encontrado. Inicializando...');
        
        // Cria overlay para fechar o menu
        const overlay = document.createElement('div');
        overlay.className = 'menu-overlay';
        overlay.setAttribute('aria-label', 'Fechar menu');
        document.body.appendChild(overlay);
        
        // Adiciona classe inicial para visibilidade
        hamburger.classList.add('hamburger-visible');
        
        // Função para abrir o menu
        function openMenu() {
            console.log('Abrindo menu...');
            hamburger.classList.add('active');
            mainMenu.classList.add('active');
            overlay.classList.add('active');
            hamburger.setAttribute('aria-expanded', 'true');
            document.body.classList.add('menu-open');
            
            // Foca no primeiro link do menu para acessibilidade
            setTimeout(() => {
                const firstLink = mainMenu.querySelector('a');
                if (firstLink) firstLink.focus();
            }, 300);
        }
        
        // Função para fechar o menu
        function closeMenu() {
            console.log('Fechando menu...');
            hamburger.classList.remove('active');
            mainMenu.classList.remove('active');
            overlay.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('menu-open');
            
            // Retorna o foco para o botão hamburguer
            hamburger.focus();
        }
        
        // Alterna entre abrir e fechar o menu
        function toggleMenu() {
            if (mainMenu.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        }
        
        // Evento de clique no botão hamburguer
        hamburger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Hamburguer clicado!');
            toggleMenu();
        });
        
        // Fecha menu ao clicar em um link
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                console.log('Link clicado, fechando menu...');
                closeMenu();
            });
        });
        
        // Fecha menu ao clicar no overlay
        overlay.addEventListener('click', function(e) {
            e.stopPropagation();
            closeMenu();
        });
        
        // Fecha menu com tecla ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mainMenu.classList.contains('active')) {
                console.log('ESC pressionado, fechando menu...');
                closeMenu();
            }
        });
        
        // Fecha menu ao redimensionar para desktop
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && mainMenu.classList.contains('active')) {
                console.log('Redimensionando para desktop, fechando menu...');
                closeMenu();
            }
        });
        
        // Fecha menu ao clicar fora dele
        document.addEventListener('click', function(e) {
            if (!mainMenu.contains(e.target) && !hamburger.contains(e.target) && mainMenu.classList.contains('active')) {
                closeMenu();
            }
        });
        
        // Navegação por teclado no menu
        document.addEventListener('keydown', function(e) {
            if (!mainMenu.classList.contains('active')) return;
            
            const focusableElements = mainMenu.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            
            if (e.key === 'Tab') {
                if (e.shiftKey && document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                } else if (!e.shiftKey && document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        });
        
        console.log('Menu hamburguer inicializado com sucesso!');
    }
    
    // ============================================
    // SISTEMA DE ACESSIBILIDADE
    // ============================================
    
    function initAccessibility() {
        const fontIncreaseBtn = document.getElementById('fontIncrease');
        const fontDecreaseBtn = document.getElementById('fontDecrease');
        const highContrastBtn = document.getElementById('highContrast');
        
        // Configurações de fonte
        let currentFontSize = 16;
        const minFontSize = 12;
        const maxFontSize = 24;
        const fontSizeStep = 2;
        
        // Função para mudar o tamanho da fonte
        function changeFontSize(increase) {
            if (increase) {
                currentFontSize = Math.min(currentFontSize + fontSizeStep, maxFontSize);
            } else {
                currentFontSize = Math.max(currentFontSize - fontSizeStep, minFontSize);
            }
            
            // Aplica o novo tamanho
            document.documentElement.style.fontSize = currentFontSize + 'px';
            
            // Salva a preferência
            localStorage.setItem('pixelLabFontSize', currentFontSize);
            
            // Mostra feedback
            showAccessibilityFeedback(increase ? 'Fonte aumentada' : 'Fonte diminuída');
        }
        
        // Função para alternar alto contraste
        function toggleHighContrast() {
            const isNowHighContrast = !document.body.classList.contains('high-contrast');
            document.body.classList.toggle('high-contrast');
            
            // Salva a preferência
            localStorage.setItem('pixelLabHighContrast', isNowHighContrast);
            
            // Mostra feedback
            showAccessibilityFeedback(isNowHighContrast ? 'Alto contraste ativado' : 'Alto contraste desativado');
        }
        
        // Função para mostrar feedback visual
        function showAccessibilityFeedback(message) {
            // Remove feedback anterior
            const existingFeedback = document.querySelector('.accessibility-feedback');
            if (existingFeedback) existingFeedback.remove();
            
            // Cria novo elemento de feedback
            const feedback = document.createElement('div');
            feedback.className = 'accessibility-feedback';
            feedback.textContent = message;
            feedback.setAttribute('role', 'alert');
            feedback.setAttribute('aria-live', 'polite');
            
            // Estilos do feedback
            Object.assign(feedback.style, {
                position: 'fixed',
                top: '60px',
                right: '20px',
                background: '#4a3eef',
                color: 'white',
                padding: '12px 18px',
                borderRadius: '6px',
                zIndex: '10001',
                fontSize: '14px',
                fontWeight: '500',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                animation: 'fadeInOut 2s ease forwards',
                border: '2px solid rgba(255,255,255,0.2)'
            });
            
            // Adiciona animação
            const style = document.createElement('style');
            style.textContent = `
                @keyframes fadeInOut {
                    0% { opacity: 0; transform: translateY(-20px) scale(0.95); }
                    15% { opacity: 1; transform: translateY(0) scale(1); }
                    85% { opacity: 1; transform: translateY(0) scale(1); }
                    100% { opacity: 0; transform: translateY(-20px) scale(0.95); }
                }
            `;
            document.head.appendChild(style);
            
            document.body.appendChild(feedback);
            
            // Remove após 2 segundos
            setTimeout(() => {
                if (feedback.parentNode) {
                    feedback.remove();
                }
            }, 2000);
        }
        
        // Event listeners para botões de acessibilidade
        if (fontIncreaseBtn) {
            fontIncreaseBtn.addEventListener('click', () => changeFontSize(true));
        }
        
        if (fontDecreaseBtn) {
            fontDecreaseBtn.addEventListener('click', () => changeFontSize(false));
        }
        
        if (highContrastBtn) {
            highContrastBtn.addEventListener('click', toggleHighContrast);
        }
        
        // Carrega preferências salvas
        function loadAccessibilityPreferences() {
            // Tamanho da fonte
            const savedFontSize = localStorage.getItem('pixelLabFontSize');
            if (savedFontSize) {
                currentFontSize = parseInt(savedFontSize);
                document.documentElement.style.fontSize = currentFontSize + 'px';
            }
            
            // Modo alto contraste
            const savedHighContrast = localStorage.getItem('pixelLabHighContrast');
            if (savedHighContrast === 'true') {
                document.body.classList.add('high-contrast');
            }
        }
        
        loadAccessibilityPreferences();
        console.log('Sistema de acessibilidade inicializado!');
    }
    
    // ============================================
    // CARROSSEL DE DEPOIMENTOS - COMPLETO
    // ============================================
    
    function initCarousel() {
        const carouselWrapper = document.getElementById('carousel-wrapper');
        const paginationContainer = document.getElementById('carousel-pagination');
        
        if (!carouselWrapper || !paginationContainer) {
            console.warn('Elementos do carrossel não encontrados');
            return;
        }
        
        console.log('Inicializando carrossel...');
        
        const cards = carouselWrapper.querySelectorAll('.testimonial-card');
        const totalCards = cards.length;
        let currentSlide = 0;
        let autoSlideInterval;
        let isAnimating = false;
        
        // Calcula quantos cards mostrar baseado na largura da tela
        function getCardsPerView() {
            const width = window.innerWidth;
            if (width < 769) return 1;    // Mobile: 1 card
            if (width < 993) return 2;    // Tablet: 2 cards
            return 3;                     // Desktop: 3 cards
        }
        
        // Cria os dots de paginação
        function createPaginationDots() {
            paginationContainer.innerHTML = '';
            const cardsPerView = getCardsPerView();
            const totalSlides = Math.ceil(totalCards / cardsPerView);
            
            for (let i = 0; i < totalSlides; i++) {
                const dot = document.createElement('span');
                dot.className = 'dot';
                dot.setAttribute('role', 'button');
                dot.setAttribute('aria-label', `Ir para slide ${i + 1}`);
                dot.setAttribute('tabindex', '0');
                
                if (i === 0) dot.classList.add('active');
                
                dot.addEventListener('click', () => goToSlide(i));
                dot.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        goToSlide(i);
                    }
                });
                
                paginationContainer.appendChild(dot);
            }
        }
        
        // Atualiza a posição do carrossel
        function updateCarouselPosition() {
            if (isAnimating) return;
            isAnimating = true;
            
            const cardsPerView = getCardsPerView();
            const cardWidth = cards[0].offsetWidth + 30; // Largura + gap
            const translateX = -(currentSlide * cardWidth * cardsPerView);
            
            carouselWrapper.style.transform = `translateX(${translateX}px)`;
            
            // Atualiza dots ativos
            const dots = paginationContainer.querySelectorAll('.dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
                dot.setAttribute('aria-current', index === currentSlide ? 'true' : 'false');
            });
            
            // Atualiza acessibilidade
            carouselWrapper.setAttribute('aria-live', 'polite');
            
            // Libera animação após 500ms
            setTimeout(() => {
                isAnimating = false;
            }, 500);
        }
        
        // Vai para um slide específico
        function goToSlide(slideIndex) {
            const cardsPerView = getCardsPerView();
            const maxSlide = Math.ceil(totalCards / cardsPerView) - 1;
            
            // Limita o índice
            if (slideIndex < 0) slideIndex = maxSlide;
            if (slideIndex > maxSlide) slideIndex = 0;
            
            currentSlide = slideIndex;
            updateCarouselPosition();
            resetAutoSlide();
        }
        
        // Próximo slide
        function nextSlide() {
            goToSlide(currentSlide + 1);
        }
        
        // Slide anterior
        function prevSlide() {
            goToSlide(currentSlide - 1);
        }
        
        // Inicia navegação automática
        function startAutoSlide() {
            autoSlideInterval = setInterval(nextSlide, 5000);
        }
        
        // Reinicia a navegação automática
        function resetAutoSlide() {
            clearInterval(autoSlideInterval);
            startAutoSlide();
        }
        
        // Inicializa o carrossel
        function initCarouselSystem() {
            createPaginationDots();
            updateCarouselPosition();
            startAutoSlide();
            
            // Pausa no hover
            carouselWrapper.addEventListener('mouseenter', () => {
                clearInterval(autoSlideInterval);
            });
            
            carouselWrapper.addEventListener('mouseleave', () => {
                startAutoSlide();
            });
            
            // Navegação por teclado
            document.addEventListener('keydown', (e) => {
                if (document.activeElement.closest('.carousel-container')) {
                    if (e.key === 'ArrowLeft') {
                        e.preventDefault();
                        prevSlide();
                    } else if (e.key === 'ArrowRight') {
                        e.preventDefault();
                        nextSlide();
                    }
                }
            });
            
            // Redimensionamento da janela
            let resizeTimeout;
            window.addEventListener('resize', () => {
                clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(() => {
                    createPaginationDots();
                    updateCarouselPosition();
                    resetAutoSlide();
                }, 250);
            });
            
            // Adiciona botões de navegação (opcional)
            addNavigationButtons();
        }
        
        // Adiciona botões de navegação anterior/próximo
        function addNavigationButtons() {
            const carouselContainer = document.querySelector('.carousel-container');
            if (!carouselContainer) return;
            
            // Botão anterior
            const prevButton = document.createElement('button');
            prevButton.className = 'carousel-btn carousel-btn-prev';
            prevButton.innerHTML = '&lt;';
            prevButton.setAttribute('aria-label', 'Slide anterior');
            
            // Botão próximo
            const nextButton = document.createElement('button');
            nextButton.className = 'carousel-btn carousel-btn-next';
            nextButton.innerHTML = '&gt;';
            nextButton.setAttribute('aria-label', 'Próximo slide');
            
            // Estilos dos botões
            const buttonStyles = `
                .carousel-btn {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    background: rgba(26, 27, 63, 0.8);
                    color: white;
                    border: none;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    font-size: 20px;
                    cursor: pointer;
                    z-index: 10;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                }
                .carousel-btn:hover {
                    background: #4a3eef;
                    transform: translateY(-50%) scale(1.1);
                }
                .carousel-btn-prev {
                    left: 10px;
                }
                .carousel-btn-next {
                    right: 10px;
                }
                @media (max-width: 768px) {
                    .carousel-btn {
                        width: 36px;
                        height: 36px;
                        font-size: 18px;
                    }
                }
            `;
            
            // Adiciona estilos
            const style = document.createElement('style');
            style.textContent = buttonStyles;
            document.head.appendChild(style);
            
            // Eventos dos botões
            prevButton.addEventListener('click', prevSlide);
            nextButton.addEventListener('click', nextSlide);
            
            // Adiciona botões ao carrossel
            carouselContainer.style.position = 'relative';
            carouselContainer.appendChild(prevButton);
            carouselContainer.appendChild(nextButton);
        }
        
        initCarouselSystem();
        console.log('Carrossel inicializado com sucesso!');
    }
    
    // ============================================
    // NEWSLETTER - VALIDAÇÃO E ENVIO
    // ============================================
    
    function initNewsletter() {
        const newsletterForm = document.querySelector('.newsletter-form');
        
        if (!newsletterForm) {
            console.warn('Formulário de newsletter não encontrado');
            return;
        }
        
        console.log('Inicializando newsletter...');
        
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const submitButton = this.querySelector('button[type="submit"]');
            const email = emailInput.value.trim();
            
            // Validação básica de email
            function isValidEmail(email) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(email);
            }
            
            // Limpa feedback anterior
            const existingFeedback = this.querySelector('.newsletter-feedback');
            if (existingFeedback) existingFeedback.remove();
            
            // Validação
            if (!email) {
                showNewsletterFeedback('Por favor, digite seu email.', 'error');
                emailInput.focus();
                return;
            }
            
            if (!isValidEmail(email)) {
                showNewsletterFeedback('Por favor, digite um email válido.', 'error');
                emailInput.focus();
                return;
            }
            
            // Simula envio
            submitButton.disabled = true;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            
            // Simula delay de rede
            setTimeout(() => {
                // Sucesso
                showNewsletterFeedback('Cadastro realizado com sucesso! Em breve você receberá nossas novidades.', 'success');
                
                // Limpa o campo
                emailInput.value = '';
                
                // Restaura o botão
                submitButton.disabled = false;
                submitButton.innerHTML = '<i class="fas fa-arrow-right"></i>';
                
                // Salva no localStorage (simulação)
                try {
                    let subscriptions = JSON.parse(localStorage.getItem('pixelLabNewsletter') || '[]');
                    subscriptions.push({
                        email: email,
                        date: new Date().toISOString()
                    });
                    localStorage.setItem('pixelLabNewsletter', JSON.stringify(subscriptions));
                } catch (error) {
                    console.error('Erro ao salvar newsletter:', error);
                }
            }, 1500);
            
            // Função para mostrar feedback
            function showNewsletterFeedback(message, type) {
                const feedback = document.createElement('div');
                feedback.className = `newsletter-feedback newsletter-feedback-${type}`;
                feedback.textContent = message;
                feedback.setAttribute('role', 'alert');
                feedback.setAttribute('aria-live', 'polite');
                
                // Estilos do feedback
                Object.assign(feedback.style, {
                    marginTop: '12px',
                    padding: '10px 15px',
                    borderRadius: '6px',
                    fontSize: '14px',
                    textAlign: 'center',
                    fontWeight: '500',
                    animation: 'fadeIn 0.3s ease'
                });
                
                if (type === 'success') {
                    feedback.style.backgroundColor = '#d4edda';
                    feedback.style.color = '#155724';
                    feedback.style.border = '1px solid #c3e6cb';
                } else {
                    feedback.style.backgroundColor = '#f8d7da';
                    feedback.style.color = '#721c24';
                    feedback.style.border = '1px solid #f5c6cb';
                }
                
                // Adiciona animação
                const style = document.createElement('style');
                style.textContent = `
                    @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(-10px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                `;
                document.head.appendChild(style);
                
                newsletterForm.appendChild(feedback);
                
                // Remove após 5 segundos
                setTimeout(() => {
                    if (feedback.parentNode) {
                        feedback.remove();
                    }
                }, 5000);
            }
        });
        
        console.log('Newsletter inicializada com sucesso!');
    }
    
    // ============================================
    // ROLAGEM SUAVE
    // ============================================
    
    function initSmoothScrolling() {
        console.log('Inicializando rolagem suave...');
        
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                // Ignora links que não são âncora
                if (href === '#' || href === '') return;
                
                const targetElement = document.querySelector(href);
                
                if (targetElement) {
                    e.preventDefault();
                    
                    // Calcula o offset considerando a barra de acessibilidade e header
                    const accessibilityBar = document.querySelector('.accessibility-bar');
                    const header = document.querySelector('.header');
                    const accessibilityBarHeight = accessibilityBar ? accessibilityBar.offsetHeight : 0;
                    const headerHeight = header ? header.offsetHeight : 0;
                    const offset = accessibilityBarHeight + headerHeight + 20;
                    
                    // Posição do target
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    
                    // Rolagem suave
                    window.scrollTo({
                        top: targetPosition - offset,
                        behavior: 'smooth'
                    });
                    
                    // Foca no elemento para acessibilidade
                    setTimeout(() => {
                        targetElement.setAttribute('tabindex', '-1');
                        targetElement.focus();
                        targetElement.removeAttribute('tabindex');
                    }, 1000);
                }
            });
        });
        
        console.log('Rolagem suave inicializada!');
    }
    
    // ============================================
    // NAVEGAÇÃO POR TECLADO (ACESSIBILIDADE)
    // ============================================
    
    function initKeyboardNavigation() {
        console.log('Inicializando navegação por teclado...');
        
        // Adiciona indicador de navegação por teclado
        let isUsingKeyboard = false;
        
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                isUsingKeyboard = true;
                document.body.classList.add('keyboard-navigation');
            }
        });
        
        document.addEventListener('mousedown', function() {
            isUsingKeyboard = false;
            document.body.classList.remove('keyboard-navigation');
        });
        
        // Foco visível para elementos interativos
        const focusableElements = document.querySelectorAll(
            'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        
        focusableElements.forEach(element => {
            element.addEventListener('focus', function() {
                if (isUsingKeyboard) {
                    this.style.outline = '3px solid #4a3eef';
                    this.style.outlineOffset = '3px';
                    this.style.boxShadow = '0 0 0 3px rgba(74, 62, 239, 0.3)';
                }
            });
            
            element.addEventListener('blur', function() {
                this.style.outline = '';
                this.style.boxShadow = '';
            });
        });
        
        console.log('Navegação por teclado inicializada!');
    }
    
    // ============================================
    // INICIALIZAÇÃO DE TODAS AS FUNCIONALIDADES
    // ============================================
    
    function initAll() {
        console.log('=== INICIANDO PIXELLAB ===');
        
        try {
            initHamburgerMenu();
            initAccessibility();
            initCarousel();
            initNewsletter();
            initSmoothScrolling();
            initKeyboardNavigation();
            
            console.log('=== PIXELLAB INICIALIZADO COM SUCESSO ===');
            
            // Adiciona estilo para o botão hamburguer visível
            const style = document.createElement('style');
            style.textContent = `
                .hamburger-visible {
                    display: flex !important;
                    visibility: visible !important;
                    opacity: 1 !important;
                }
                @media (max-width: 768px) {
                    .hamburger {
                        display: flex !important;
                        visibility: visible !important;
                        opacity: 1 !important;
                    }
                }
                @media (min-width: 769px) {
                    .hamburger {
                        display: none !important;
                    }
                }
            `;
            document.head.appendChild(style);
            
        } catch (error) {
            console.error('Erro durante a inicialização:', error);
        }
    }
    
    // Inicia tudo quando o DOM estiver pronto
    initAll();
});

// ============================================
// FUNÇÕES GLOBAIS E UTILITÁRIAS
// ============================================

// Verifica se um elemento está visível na viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Debounce para otimizar eventos de resize/scroll
function debounce(func, wait = 100) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle para limitar a frequência de execução
function throttle(func, limit = 100) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ============================================
// TRATAMENTO DE ERROS GLOBAIS
// ============================================

// Captura erros não tratados
window.addEventListener('error', function(e) {
    console.error('Erro não tratado no PixelLab:', {
        message: e.message,
        filename: e.filename,
        lineno: e.lineno,
        colno: e.colno,
        error: e.error
    });
    
    // Exibe mensagem amigável para o usuário (opcional)
    if (window.confirm('Ocorreu um erro inesperado. Deseja recarregar a página?')) {
        window.location.reload();
    }
});

// Captura rejeições de promises não tratadas
window.addEventListener('unhandledrejection', function(e) {
    console.error('Promise rejeitada não tratada:', e.reason);
});

// ============================================
// PERFORMANCE E OTIMIZAÇÃO
// ============================================

// Otimizações para mobile
if ('ontouchstart' in window) {
    document.documentElement.classList.add('touch-device');
}

// Previne zoom em inputs em iOS
document.addEventListener('touchstart', function(e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') {
        document.body.style.zoom = 1;
    }
});

// Suporte a prefers-reduced-motion
const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
if (mediaQuery.matches) {
    document.documentElement.style.setProperty('--animation-duration', '0.01ms');
}

// Atualiza quando a preferência muda
mediaQuery.addEventListener('change', () => {
    if (mediaQuery.matches) {
        document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    } else {
        document.documentElement.style.setProperty('--animation-duration', '300ms');
    }
});

// ============================================
// FUNÇÕES DE DEBUG (APENAS PARA DESENVOLVIMENTO)
// ============================================

// Função para verificar se elementos importantes existem
function debugElements() {
    console.group('Debug de elementos');
    console.log('Hamburguer:', document.getElementById('hamburger'));
    console.log('Menu:', document.getElementById('main-menu'));
    console.log('Carrossel wrapper:', document.getElementById('carousel-wrapper'));
    console.log('Pagination:', document.getElementById('carousel-pagination'));
    console.log('Accessibility bar:', document.getElementById('accessibilityBar'));
    console.groupEnd();
}

// Executa debug se houver parâmetro na URL
if (window.location.search.includes('debug=true')) {
    setTimeout(debugElements, 1000);
}

console.log('PixelLab JavaScript carregado!');
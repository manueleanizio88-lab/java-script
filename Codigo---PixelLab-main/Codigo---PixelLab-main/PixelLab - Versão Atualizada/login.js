document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const loginSuccess = document.getElementById('loginSuccess');
    const forgotPassword = document.getElementById('forgotPassword');
    const signupLink = document.getElementById('signupLink');
    
    // Função para validar e-mail
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Função para validar senha
    function validatePassword(password) {
        return password.length >= 6;
    }
    
    // Validação em tempo real
    emailInput.addEventListener('input', function() {
        if (validateEmail(emailInput.value)) {
            emailError.style.display = 'none';
            emailInput.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        } else {
            emailError.style.display = 'block';
            emailInput.style.borderColor = '#ff6b6b';
        }
    });
    
    passwordInput.addEventListener('input', function() {
        if (validatePassword(passwordInput.value)) {
            passwordError.style.display = 'none';
            passwordInput.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        } else {
            passwordError.style.display = 'block';
            passwordInput.style.borderColor = '#ff6b6b';
        }
    });
    
    // Envio do formulário
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailValid = validateEmail(emailInput.value);
        const passwordValid = validatePassword(passwordInput.value);
        
        if (emailValid && passwordValid) {
            // Simulação de login bem-sucedido
            loginSuccess.style.display = 'block';
            emailError.style.display = 'none';
            passwordError.style.display = 'none';
            
            // Aqui você normalmente enviaria os dados para o servidor
            console.log('Login realizado:', {
                email: emailInput.value,
                password: passwordInput.value
            });
            
            // Redirecionar após um breve delay (simulação)
            setTimeout(function() {
                alert('Login realizado com sucesso! Redirecionando...');
            }, 1000);
        } else {
            if (!emailValid) {
                emailError.style.display = 'block';
                emailInput.style.borderColor = '#ff6b6b';
            }
            if (!passwordValid) {
                passwordError.style.display = 'block';
                passwordInput.style.borderColor = '#ff6b6b';
            }
        }
    });
    
    // Link "Esqueci minha senha"
    forgotPassword.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Funcionalidade de recuperação de senha será implementada em breve!');
    });
    
    // Link "Cadastre-se"
    signupLink.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Redirecionando para página de cadastro...');
        // window.location.href = 'signup.html'; // Descomente para redirecionar
    });
});


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
    
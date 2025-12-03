// ESSA PARTE É DE FUNCIONALIDADES DE ACESSIBILIDADE 

 // Aguarda o carregamento completo da página ----- JÁ VIMOS MUITO SOBRE ISSOOOO
 document.addEventListener('DOMContentLoaded', function() {
     
     // VARIÁVEIS GLOBAIS
    
     const body = document.body;
     const increaseFontBtn = document.getElementById('increase-font');
     const decreaseFontBtn = document.getElementById('decrease-font');
     const highContrastBtn = document.getElementById('high-contrast');
     const normalViewBtn = document.getElementById('normal-view');
     const loginForm = document.getElementById('login-form');
     const usernameInput = document.getElementById('username');
     const passwordInput = document.getElementById('password');
     const togglePasswordBtn = document.getElementById('toggle-password');
     const successMessage = document.getElementById('success-message');
     

     // CONTROLES DE FONTE
    
     
     // Aumenta o tamanho da fonte em 20%
     increaseFontBtn.addEventListener('click', function() {
         body.classList.add('large-text');
         body.classList.remove('high-contrast');
         showTemporaryMessage('Tamanho da fonte aumentado. Pressione Ctrl+0 para voltar ao normal.');
         // Move o foco para o título principal para feedback
         document.getElementById('main-title').focus();
     });
     
     // Diminui o tamanho da fonte (volta ao normal)
     decreaseFontBtn.addEventListener('click', function() {
         body.classList.remove('large-text');
         body.classList.remove('high-contrast');
         showTemporaryMessage('Tamanho da fonte redefinido.');
     });
     
   
     // CONTROLES DE CONTRASTE
   
     
     // Ativa o modo de alto contraste
     highContrastBtn.addEventListener('click', function() {
         body.classList.add('high-contrast');
         body.classList.remove('large-text');
         showTemporaryMessage('Modo de alto contraste ativado.');
     });
     
     // Volta à visualização normal
     normalViewBtn.addEventListener('click', function() {
         body.classList.remove('high-contrast');
         body.classList.remove('large-text');
         showTemporaryMessage('Visualização normal ativada.');
     });
     
     // MOSTRAR/OCULTAR SENHA
    
     
     togglePasswordBtn.addEventListener('click', function() {
         const isPasswordVisible = passwordInput.type === 'text';
         
         // Alterna entre tipo password e text
         if (isPasswordVisible) {
             passwordInput.type = 'password';
             togglePasswordBtn.textContent = 'Mostrar';
             togglePasswordBtn.setAttribute('aria-label', 'Mostrar senha');
             togglePasswordBtn.setAttribute('aria-pressed', 'false');
         } else {
             passwordInput.type = 'text';
             togglePasswordBtn.textContent = 'Ocultar';
             togglePasswordBtn.setAttribute('aria-label', 'Ocultar senha');
             togglePasswordBtn.setAttribute('aria-pressed', 'true');
         }
     });
     
     
     // VALIDAÇÃO DO FORMULÁRIO
     
     loginForm.addEventListener('submit', function(event) {
         event.preventDefault(); // Impede envio padrão
         
         // Reseta mensagens de erro anteriores
         resetErrors();
         
         // Validação dos campos
         let isValid = true;
         
         // Validação do usuário
         if (!usernameInput.value.trim()) {
             showError(usernameInput, 'Por favor, informe seu nome de usuário.');
             isValid = false;
         }
         
         // Validação da senha
         if (!passwordInput.value.trim()) {
             showError(passwordInput, 'Por favor, informe sua senha.');
             isValid = false;
         }
         
         // Se o formulário for válido, simula login bem-sucedido
         if (isValid) {
             // Mostra mensagem de sucesso
             successMessage.style.display = 'block';
             
             // Foca na mensagem de sucesso para leitores de tela
             successMessage.focus();
             
             // Simula redirecionamento após 2 segundos
             setTimeout(function() {
                 showTemporaryMessage('Login simulado com sucesso! Em uma aplicação real, você seria redirecionado.');
                 loginForm.reset();
                 successMessage.style.display = 'none';
                 usernameInput.focus(); // Volta o foco para o primeiro campo
             }, 2000);
         }
     });
     
     // FUNÇÕES AUXILIARES NECESSÁRIAS
     
     // Mostra mensagem de erro para um campo específico
     function showError(inputElement, message) {
         const errorId = inputElement.id + '-error';
         const errorElement = document.getElementById(errorId);
         
         // Adiciona classe de erro ao input
         inputElement.classList.add('error');
         inputElement.setAttribute('aria-invalid', 'true');
         
         // Mostra mensagem de erro
         errorElement.textContent = message;
         errorElement.style.display = 'block';
         
         // Foca no campo com erro
         inputElement.focus();
     }
     
     // Reseta todas as mensagens de erro
     function resetErrors() {
         const errorMessages = document.querySelectorAll('.error-message');
         const inputs = document.querySelectorAll('input');
         
         errorMessages.forEach(function(error) {
             error.style.display = 'none';
             error.textContent = '';
         });
         
         inputs.forEach(function(input) {
             input.classList.remove('error');
             input.setAttribute('aria-invalid', 'false');
         });
     }
     
     // Mostra mensagem temporária no topo da página
     function showTemporaryMessage(message) {
         // Cria elemento para a mensagem
         const messageElement = document.createElement('div');
         messageElement.setAttribute('role', 'status');
         messageElement.setAttribute('aria-live', 'polite');
         messageElement.style.cssText = `
             position: fixed;
             top: 70px;
             left: 50%;
             transform: translateX(-50%);
             background-color: #3498db;
             color: white;
             padding: 15px 20px;
             border-radius: 4px;
             z-index: 1000;
             box-shadow: 0 4px 8px rgba(0,0,0,0.2);
             max-width: 90%;
             text-align: center;
         `;
         messageElement.textContent = message;
         
         // Adiciona ao body
         document.body.appendChild(messageElement);
         
         // Remove após 3 segundos
         setTimeout(function() {
             messageElement.remove();
         }, 3000);
     }
     
     // MELHORIAS DE NAVEGAÇÃO POR TECLADO
     
     // Adiciona navegação por teclado na barra de acessibilidade
     const accessibilityButtons = document.querySelectorAll('.accessibility-btn');
     
     accessibilityButtons.forEach((button, index) => {
         // Navegação com Tab entre botões
         button.addEventListener('keydown', function(event) {
             // Enter ou Space ativa o botão
             if (event.key === 'Enter' || event.key === ' ') {
                 event.preventDefault();
                 this.click();
             }
             
             // Setas direcionais navegam entre botões (para usuários que não usam Tab)
             if (event.key === 'ArrowRight') {
                 event.preventDefault();
                 const nextButton = accessibilityButtons[index + 1] || accessibilityButtons[0];
                 nextButton.focus();
             }
             
             if (event.key === 'ArrowLeft') {
                 event.preventDefault();
                 const prevButton = accessibilityButtons[index - 1] || accessibilityButtons[accessibilityButtons.length - 1];
                 prevButton.focus();
             }
         });
     });
     
     // Foco no primeiro campo ao carregar a página
     usernameInput.focus();
     
     // TRATAMENTO DO LINK "ESQUECI MINHA SENHA"
     
     document.getElementById('forgot-password').addEventListener('click', function(event) {
         event.preventDefault();
         showTemporaryMessage('Em uma aplicação real, você seria redirecionado para a página de recuperação de senha.');
         
         // Em uma aplicação real, aqui seria o redirecionamento
         // window.location.href = '/recuperar-senha';
     });
     
     // SUPORTE A TECLAS DE ATALHO
     
     document.addEventListener('keydown', function(event) {
         // Alt+1 vai para o conteúdo principal
         if (event.altKey && event.key === '1') {
             event.preventDefault();
             document.getElementById('main-title').focus();
         }
         
         // Alt+2 vai para o formulário de login
         if (event.altKey && event.key === '2') {
             event.preventDefault();
             usernameInput.focus();
         }
         
         // Ctrl+0 volta ao tamanho normal da fonte
         if (event.ctrlKey && event.key === '0') {
             event.preventDefault();
             body.classList.remove('large-text');
             body.classList.remove('high-contrast');
             showTemporaryMessage('Tamanho da fonte redefinido.');
         }
     });
     
     // INICIALIZAÇÃO FINAL
     
     // Anuncia recursos de acessibilidade para leitores de tela
     // (apenas uma vez, quando a página carrega)
     setTimeout(function() {
         const announcement = document.createElement('div');
         announcement.setAttribute('aria-live', 'polite');
         announcement.setAttribute('aria-atomic', 'true');
         announcement.classList.add('visually-hidden');
         announcement.textContent = 'Página de login acessível carregada. Use Alt+1 para ir ao conteúdo principal ou Alt+2 para ir ao formulário de login.';
         document.body.appendChild(announcement);
         
         // Remove após ser lido
         setTimeout(function() {
             announcement.remove();
         }, 1000);
     }, 1000);
 });

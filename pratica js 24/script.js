document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list'); 
    const navLinks = document.querySelectorAll('.nav-list a');

    /* Função para alternar a visibilidade do menu */
    function toggleMenu() {
        if (navList) {
            navList.classList.toggle('active'); // Adiciona/remove a classe 'active'
        }
    }

    // 2. Adiciona um ouvinte de evento ao botão de alternar menu
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    // 3. Fecha o menu quando um link é clicado (útil em mobile)
    if (navLinks.length > 0 && navList) {
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (navList.classList.contains('active')) {
                    navList.classList.remove('active');
                }
            });
        });
    }

}); 

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Impede o comportamento padrão do link

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const headerOffset = document.querySelector('.main-header').offsetHeight;
            
            const elementTop = targetElement.getBoundingClientRect().top + window.scrollY;

            const offsetPosition = elementTop - headerOffset;
            
            window.scrollTo({
                top: offsetPosition, 
                behavior: "smooth" // Rolagem suave
            });
        }
    });
});
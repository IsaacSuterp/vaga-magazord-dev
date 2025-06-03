// js/script.js

document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-button');
    const tabContentsContainer = document.querySelector('.tab-content'); // Pega o container

    if (tabs.length > 0 && tabContentsContainer) {
        const tabContents = tabContentsContainer.children; // Pega os divs filhos diretos

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove classes ativas de todos os botões
                tabs.forEach(item => {
                    item.classList.remove('active-tab', 'text-blue-600', 'border-blue-600', 'font-semibold');
                    // Adiciona de volta as classes de inativo/hover padrão
                    item.classList.add('text-slate-500', 'border-transparent', 'font-medium', 'hover:text-slate-700', 'hover:border-slate-300');
                });

                // Esconde todos os conteúdos das abas
                Array.from(tabContents).forEach(content => {
                    content.classList.remove('active-tab-content');
                    content.classList.remove('animate-fadeIn'); // Remove para re-adicionar e re-ativar animação
                });

                // Adiciona classes ativas ao botão clicado
                tab.classList.add('active-tab', 'text-blue-600', 'border-blue-600', 'font-semibold');
                tab.classList.remove('text-slate-500', 'border-transparent', 'font-medium', 'hover:text-slate-700', 'hover:border-slate-300');
                
                const targetContentId = tab.dataset.tabTarget;
                const targetContent = document.querySelector(targetContentId);

                if (targetContent) {
                    targetContent.classList.add('active-tab-content');
                    // Força o reflow para a animação rodar novamente (útil em alguns navegadores)
                    void targetContent.offsetWidth; 
                    targetContent.classList.add('animate-fadeIn');
                }
            });
        });
    }

    // Atualizar ano no rodapé
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
});